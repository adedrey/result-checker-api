const Complaint = require('../models/complaints');
const Assignment = require("../models/assignment");
const Student = require('../models/students');
const User = require('../models/users');
const Staff = require('../models/staff');
const Lecturer = require('../models/lecturer');
const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');
const io = require('../socket');
const fs = require("fs");
const fastcsv = require("fast-csv");
// const nodemailer = require('nodemailer');
// const sendgridTransport = require('nodemailer-sendgrid-transport');
// const transporter = nodemailer.createTransport(sendgridTransport({
//     auth: {
//         api_key: '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'
//     }
// }));
// Get all complaints
exports.getComplaints = async (req, res, next) => {
    try {
        const complaints = await Complaint.find().populate('userId')
            .sort({
                updatedAt: -1
            })
        res.status(200).json({
            complaints: complaints
        });

    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

// get a complaint by Id

exports.getComplaintById = async (req, res, next) => {
    const complaintId = req.params.complaintId;
    try {
        const complaint = await Complaint.findOne({
            _id: complaintId
        }).populate('userId');
        res.status(200).json({
            complaint: complaint
        })
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
            _id: complaintId
        });
        if (!result) {
            return res.status(401).json({
                message: 'An error ocurred!'
            });
        }
        io.getIO().emit('complaints', {
            action: 'delete',
            complaintId: complaintId
        });
        res.status(200).json({
            message: 'Complaint Deleted Successfully'
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        });
    }
}

exports.updateComplaintById = async (req, res, next) => {
    const complaintId = req.body.complaintId;
    try {
        const complaint = await Complaint.findOne({
            _id: complaintId
        }).populate('userId');
        complaint.status = !complaint.status;
        const result = await complaint.save()
        io.getIO().emit('complaints', {
            action: 'update',
            complaint: result
        })
        res.status(200).json({
            complaint: result
        })
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

exports.getAssignments = async (req, res, next) => {
    // ...
    try {
        const assignments = await Assignment.find().populate('assignments.users.userId').sort({
            _id: -1
        });
        res.status(200).json({
            assignments: assignments
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        });
    }
}

exports.postAddAssignment = async (req, res, next) => {
    // ...
    const department = req.body.department;
    const course_code = req.body.course_code;
    const question = req.body.question;
    const staff_no = req.body.staff_no ? req.body.staff_no : 'Admin';
    const submission_date = req.body.submission_date;

    const assignemnt = new Assignment({
        department: department,
        course_code: course_code,
        staff_no: staff_no,
        question: question,
        submission_date: submission_date,
        assignments: {
            users: []
        }
    });
    try {
        const result = await assignemnt.save();
        io.getIO().emit('assignments', {
            action: 'admincreate',
            assignment: result
        })
        res.status(200).json({
            assignment: result
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        });
    }
}

exports.getAssignmentById = async (req, res, next) => {
    // ...
    const assignmentId = req.params.assignmentId;
    try {
        const assignment = await Assignment.findOne({
            _id: assignmentId
        }).populate('assignments.users.userId')
        res.status(200).json({
            assignment: assignment
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

exports.deleteAssignment = async (req, res, next) => {
    // ...
    const assignmentId = req.params.assignmentId;
    try {
        const result = await Assignment.findOneAndDelete({
            _id: assignmentId
        })
        io.getIO().emit('assignments', {
            action: 'admin_delete',
            assignmentId: assignmentId
        });
        res.status(200).json({
            message: 'Assignment deleted!'
        })
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

exports.postPreRegisterStudent = async (req, res, next) => {
    try {
        const password = '12345678';
        const hashedPassword = await bcrypt.hash(password, 12);
        let stream = fs.createReadStream(req.file.path);
        let csvData = [];
        let csvStream = fastcsv
            .parse()
            .on("data", function (data) {
                csvData.push({
                    name: data[1],
                    jamb_no: data[2],
                    matric_no: data[3],
                    department: data[4],
                    rank: data[5],
                    moe: data[6],
                    yoe: data[7],
                    password: hashedPassword
                });
            })
            .on("end", async function () {
                // remove the first line: header
                csvData.shift();
                // check for duplicate before uploading
                if (!checkKeyDuplicate(csvData)) {
                    return res.status(401).json({
                        message: 'Duplicate Matric Number. Kindly check for uniqueness before uploading.'
                    });
                }
                // save to the MongoDB database collection
                const add_students = await User.insertMany(csvData);
                console.log(add_students);
                res.status(200).json({
                    message: "Uploaded successfully",
                    users: add_students
                });
            });

        stream.pipe(csvStream);
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

function checkKeyDuplicate(csvData) {
    var co = {};
    var unique = true;
    for (var i = 0; i < csvData.length; i++) {
        var o = csvData[i];
        if (co[o.matric_no]) {
            unique = false;
            break;
        } else {
            co[o.matric_no] = true;
        }
    }
    return unique;
}
function checkStaffKeyDuplicate(csvData) {
    var co = {};
    var unique = true;
    for (var i = 0; i < csvData.length; i++) {
        var o = csvData[i];
        if (co[o.staff_no]) {
            unique = false;
            break;
        } else {
            co[o.staff_no] = true;
        }
    }
    return unique;
}
exports.postPreRegisterStaff = async (req, res, next) => {
    try {
        const password = '12345678';
        const hashedPassword = await bcrypt.hash(password, 12);
        let stream = fs.createReadStream(req.file.path);
        let csvData = [];
        let csvStream = fastcsv
            .parse()
            .on("data", function (data) {
                csvData.push({
                    name: data[1],
                    staff_no: data[2],
                    rank: data[3],
                    department: data[4],
                    password: hashedPassword
                });
            })
            .on("end", async function () {
                // remove the first line: header
                csvData.shift();
                // check for duplicate before uploading
                if (!checkStaffKeyDuplicate(csvData)) {
                    return res.status(401).json({
                        message: 'Duplicate Staff Number. Kindly check for uniqueness before uploading.'
                    });
                }
                // save to the MongoDB database collection
                const add_staff = await Lecturer.insertMany(csvData);
                res.status(200).json({
                    message: "Uploaded successfully",
                    lecturers: add_staff
                });
            });

        stream.pipe(csvStream);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

exports.getUsers = async (req, res, next) => {
    // ...
    try {
        const users = await User.find().sort({
            _id: -1
        })
        res.status(200).json({
            users: users
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        });
    }
}

exports.getLecturers = async (req, res, next) => {
    // ...
    try {
        const lecturers = await Lecturer.find().sort({
            _id: -1
        });
        res.status(200).json({
            lecturers: lecturers
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        });
    }
}

exports.deleteUser = async (req, res, next) => {
    const userId = req.params.userId;
    try {
        const result = await User.findOneAndDelete({
            _id: userId
        })
        res.status(200).json({
            message: 'Deleted successfully'
        })
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

exports.deleteLecturer = async (req, res, next) => {
    const lecturerId = req.params.lecturerId;
    try {
        const result = await Lecturer.findOneAndDelete({
            _id: lecturerId
        })
        res.status(200).json({
            message: 'Deleted successfully'
        })

    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

exports.postUserActive = async (req, res, next) => {
    const userId = req.params.userId;
    try {
        const user = await User.findOne({
            _id: userId
        });
        user.is_active = !user.is_active;
        const result = await user.save()
        res.status(200).json({
            user: result
        });

    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

exports.postLecturerActive = async (req, res, next) => {
    const lecturerId = req.params.lecturerId;
    try {
        const lecturer = await Lecturer.findOne({
            _id: lecturerId
        });
        lecturer.is_active = !lecturer.is_active;
        const result = await lecturer.save();
        res.status(200).json({
            lecturer: result
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }

}

exports.getPreregisteredStudent = async (req, res, next) => {
    // ...
    try {
        const students = await Student.find().sort({
            _id: -1
        })
        res.status(200).json({
            students: students
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        });
    }

}

exports.getPreregisteredStaff = async (req, res, next) => {
    // ...
    try {
        const staff = await Staff.find().sort({
            _id: -1
        })
        res.status(200).json({
            staff: staff
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        });
    }
}

exports.postProfile = async (req, res, next) => {
    const password = req.body.password;
    const newpassword = req.body.newpassword;
    try {
        const user = await Admin.findOne({
            _id: req.admin._id
        });
        const doMatch = await bcrypt.compare(password, user.password);
        if (!doMatch) {
            return res.status(401).json({
                message: "Password does not match!"
            })
        }
        const hashPassword = await bcrypt.hash(newpassword, 12);
        user.password = hashPassword;
        const result = await user.save();
        res.status(200).json({
            message: "Profile has been updated!"
        })
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}