const Complaint = require('../models/complaints');
const Assignment = require("../models/assignment");
const User = require('../models/users');
const Result = require('../models/result');
const Test = require('../models/test');
const bcrypt = require('bcryptjs');
const io = require('../socket');
const utils = require('../lib/utils');
const {
    cloudinary
} = require('../config/cloudinary');
// Add a new Complaint
exports.createComplaint = async (req, res, next) => {
    const case_type = req.body.case_type;
    const title = req.body.title;
    const body = req.body.body;

    const complaint = new Complaint({
        case_type: case_type,
        title: title,
        body: body,
        matric_no: req.enduser.matric_no
    });
    try {
        const result = await complaint.save();
        io.getIO().emit('complaints', {
            action: 'create',
            complaint: result
        });
        res.status(200).json({
            complaint: result
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

exports.updateComplaint = async (req, res, next) => {
    const case_type = req.body.case_type;
    const title = req.body.title;
    const body = req.body.body;
    const complaintId = req.params.complaintId;
    try {
        const complaint = await Complaint.findOne({
            _id: complaintId,
            matric_no: req.enduser.matric_no
        });
        if (complaint.status) {
            return res.status(401).json({
                message: 'Sorry, your ticket has been process. Kindly open another ticket'
            })
        }
        complaint.title = title;
        complaint.case_type = case_type;
        complaint.body = body;
        const result = await complaint.save();
        res.status(200).json({
            complaint: result
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

// Get all complaints
exports.getComplaints = async (req, res, next) => {
    try {
        const complaints = await Complaint.find({
            matric_no: req.enduser.matric_no
        }).sort({
            _id: -1
        });
        res.status(200).json({
            complaints: complaints
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        });
    }
}

// get a complaint by Id

exports.getComplaintById = async (req, res, next) => {
    const complaintId = req.params.complaintId;
    try {
        const complaint = await Complaint.findOne({
            _id: complaintId,
            matric_no: req.enduser.matric_no
        });
        res.status(200).json({
            complaint: complaint
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}
exports.deleteComplaintById = async (req, res, next) => {
    const complaintId = req.params.complaintId;
    try {
        const result = await Complaint.findOneAndDelete({
            _id: complaintId,
            matric_no: req.enduser.matric_no
        })
        res.status(200).json({
            message: 'Complaint Deleted Successfully'
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

exports.getAssignments = async (req, res, next) => {
    // ...
    try {
        const assignments = await Assignment.find({
            submission_date: {
                $gt: Date.now()
            }
        }).sort({
            _id: -1
        })
        res.status(200).json({
            assignments: assignments
        });

    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        });
    }
}


exports.getAssignmentById = async (req, res, next) => {
    // ...
    try {
        const assignmentId = req.params.assignmentId
        const assignment = await Assignment.findOne({
            _id: assignmentId,
            submission_date: {
                $gt: Date.now()
            }
        });
        res.status(200).json({
            assignment: assignment
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

exports.postSubmitAssignment = async (req, res, next) => {
    // ...
    const assignmentId = req.body.assignmentId;
    const attachmentString = req.body.attachmentString;
    const url = req.protocol + '://' + req.get("host");
    const attachment = req.file;
    if (!attachment) {
        return res.status(401).json({
            message: 'Invalid Document Type...'
        });
    }
    try {
        const assignment = await Assignment.findOne({
            _id: assignmentId,
            submission_date: {
                $gt: Date.now()
            }
        });
        const updatedAssignmentList = assignment.assignments.users;
        const assignmentIndex = assignment.assignments.users.findIndex(p => p.userId.toString() === req.enduser._id.toString());
        if (assignmentIndex >= 0) {
            return res.status(401).json({
                message: 'Sorry, you have already submitted..'
            })
        }
        const uploadResponse = await cloudinary.uploader.upload(attachmentString, {
            format: "pdf",
            resource_type: "raw",
            upload_preset: 'afit_assignments'
        });
        console.log(uploadResponse)
        updatedAssignmentList.push({
            userId: req.enduser._id,
            attachment: uploadResponse.url,
            attachmentId: uploadResponse.public_id
        });
        assignment.assignments.users = updatedAssignmentList;
        const result = await assignment.save();
        io.getIO().emit('assignments', {
            action: 'update',
            assignment: result
        });
        res.status(200).json({
            message: 'Assignment submitted successfully',
            assignment: result
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

exports.getProfile = async (req, res, next) => {
    try {
        const user = await User.findOne({
            _id: req.enduser._id
        });
        res.status(200).json({
            user: user
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

exports.getResults = async (req, res, next) => {
    try {
        const results = await Result.find({
            $text: {
                $search: `\"${req.enduser.matric_no}\"`
            }
        }).sort({
            _id: 1
        });
        const mapped_result = results.map(response => {
            const creditPointCal = response.data.map(response => {
                return {

                    course_code: response.course_code,
                    title: response.title,
                    unit: response.unit,
                    status: response.status,
                    point: +response.unit * +response.result.find(p => p.matric_no === req.enduser.matric_no).point,
                };
            });
            return {
                session: response.session,
                semester: response.semester,
                data: response.data.map(responseData => {
                    return {
                        course_code: responseData.course_code,
                        title: responseData.title,
                        unit: responseData.unit,
                        status: responseData.status,
                        result: responseData.result.find(p => p.matric_no === req.enduser.matric_no)
                    }
                }),

                totalUnits: calculateUnits(response.data),
                totalCreditPoints: calculateCreditPoint(creditPointCal),
                ctnup: calculateUnitsPassed(creditPointCal),
                ctnu: calculateUnits(response.data),
                ctcp: calculateCreditPoint(creditPointCal)
            };
        });

        const userData = {
            matric_no: req.enduser.matric_no,
            department: req.enduser.department,
            name: req.enduser.name
        };
        res.status(200).json({
            results: mapped_result,
            userData: userData
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

exports.getTestResults = async (req, res, next) => {
    try {
        const results = await Test.find({
            $text: {
                $search: `\"${req.enduser.matric_no}\"`
            }
        }).sort({
            _id: 1
        });
        const mapped_result = results.map(response => {
            return {
                session: response.session,
                semester: response.semester,
                data: response.data.map(responseData => {
                    return {
                        course_code: responseData.course_code,
                        title: responseData.title,
                        unit: responseData.unit,
                        status: responseData.status,
                        result_type: responseData.result_type,
                        result: responseData.result.find(p => p.matric_no === req.enduser.matric_no)
                    }
                }),
                upload_date: response.addedAt
            };
        });

        const userData = {
            matric_no: req.enduser.matric_no,
            department: req.enduser.department,
            name: req.enduser.name
        };
        res.status(200).json({
            results: mapped_result,
            userData: userData
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

function calculateUnits(semesterArray) {
    const total = semesterArray.reduce((acc, {
        unit
    }) => acc += +(unit || 0), 0);
    // console.log(total)
    return total;
}


function calculateUnits(semesterArray) {
    const total = semesterArray.reduce((acc, {
        unit
    }) => acc += +(unit || 0), 0);
    // console.log(total)
    return total;
}

function calculateCreditPoint(semesterArray) {
    const total = semesterArray.reduce((acc, {
        point
    }) => acc += +(point || 0), 0);
    return total;
}

function calculateUnitsPassed(semesterArray) {
    const total = semesterArray.reduce((acc, {
        point,
        unit
    }) => acc += +((point !== 0 ? unit : 0) || 0), 0);
    return total;
}
exports.postProfile = async (req, res, next) => {
    const password = req.body.password;
    const newpassword = req.body.newpassword;
    try {
        const user = await User.findOne({
            _id: req.enduser._id
        });
        if (password !== null && newpassword !== null) {
            const isValid = utils.validPassword(password, user.hash, user.salt);
            if (!isValid) {
                return res.status(401).json({
                    message: "Password is not correct!"
                });
            }
            const saltHash = utils.genPassword(newpassword);
            const salt = saltHash.salt;
            const hash = saltHash.hash;
            user.hash = hash;
            user.salt = salt;
            const result = await user.save();
            res.status(200).json({
                message: "Profile has been updated!",
                user: result
            });
        } else {
            return res.status(401).json({
                message: "Password is invalid!"
            });
        }
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}