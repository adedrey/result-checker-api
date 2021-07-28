const Assignment = require('../models/assignment');
const Lecturer = require('../models/lecturer');
const Course = require('../models/courses');
const Result = require('../models/result');
const Test = require('../models/test');
const bcrypt = require('bcryptjs');
const fs = require("fs");
const fastcsv = require("fast-csv");
const io = require('../socket');
const utils = require('../lib/utils');
const {
    cloudinary
} = require('../config/cloudinary');
exports.getAssignments = async (req, res, next) => {
    // ...
    try {
        const assignments = await Assignment.find({
            staff_no: req.user.staff_no
        }).populate('assignments.users.userId').sort({
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
exports.getStaffRole = async (req, res, next) => {
    // ...
    try {
        res.status(200).json({
            checked: req.user.role === 'hod' ? true : false
        })
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
    const submission_date = req.body.submission_date;

    const assignemnt = new Assignment({
        department: department,
        course_code: course_code,
        staff_no: req.user.staff_no,
        question: question,
        submission_date: submission_date,
        assignments: {
            users: []
        }
    });
    try {
        const result = await assignemnt.save();
        io.getIO().emit('lecturer_assignments', {
            action: 'lecturercreate',
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
    const assignmentId = req.params.assignmentId
    try {
        const assignment = await Assignment.findOne({
            _id: assignmentId,
            staff_no: req.user.staff_no
        }).populate('assignments.users.userId');
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
    const assignmentId = req.params.assignmentId
    try {
        const result = await Assignment.findOneAndDelete({
            _id: assignmentId,
            staff_no: req.user.staff_no
        });
        io.getIO().emit('lecturer_assignments', {
            action: 'delete',
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

exports.postUploadResult = async (req, res, next) => {
    try {
        const course_code = (req.body.course_code).toUpperCase();
        const session = req.body.session;
        const semester = req.body.semester;
        const url = req.protocol + '://' + req.get("host");
        const attachment = req.file;
        if (req.user.role !== 'hod') {
            return res.status(401).json({
                message: 'Access Denied!'
            })
        }
        const checkDepartment = await Course.findOne({
            department: req.user.department
        });
        if (!checkDepartment) {
            return res.status(401).json({
                message: 'Access Denied! You can not upload result for this department'
            })
        };
        // Check if the Course exist
        const checkIfCourseExist = checkDepartment.courses.find(p => p.course_code === course_code);
        if (!checkIfCourseExist) {
            return res.status(401).json({
                message: 'Invalid Course Code'
            });
        };
        // Check if the course exist for that semester
        const checkIfSemesterCourseExist = checkIfCourseExist.semester === semester ? true : false;
        if (!checkIfSemesterCourseExist) {
            return res.status(401).json({
                message: 'Error! Invalid Semester for course code.'
            });
        };
        let stream = fs.createReadStream(req.file.path);
        let csvData = [];
        let csvStream = fastcsv
            .parse()
            .on("data", function (data) {
                csvData.push({
                    matric_no: data[1],
                    ca: Number(+data[2])? +data[2] : 0,
                    exam: Number(+data[3])? +data[3] : 0,
                    total: sum(data[2], data[3]),
                    point: calculateGradePoint(sum(data[2], data[3])),
                    grade: calculateGrade(sum(data[2], data[3])),
                });
            })
            .on("end", async function () {
                // remove the first line: header
                csvData.shift();
                // check for duplicate before uploading
                if (!checkMatricNumberDuplicate(csvData)) {
                    return res.status(401).json({
                        message: 'Duplicate Matric Number. Kindly check for uniqueness before uploading.'
                    });
                }
                // save to the MongoDB database collection
                const checkResultUpload = await Result.findOne({
                    session: session,
                    semester: semester,
                    'data.course_code': course_code,
                });
                console.log(checkResultUpload);
                if (checkResultUpload) {
                    return res.status(401).json({
                        message: 'Sorry, you can not upload again. Please wait till upgrading period.'
                    });
                }
                const retrieveSessionResultDocument = await Result.findOne({
                    session: session,
                    semester: semester
                })
                // console.log(retrieveSessionResultDocument)
                if(!retrieveSessionResultDocument) {
                    return res.status(401).json({
                        message: 'Sorry, you can not upload for this semeser. Please wait till the portal is opened.'
                    });
                }
                retrieveSessionResultDocument.data.push({
                    course_code: checkIfCourseExist.course_code,
                    title: checkIfCourseExist.title,
                    unit: checkIfCourseExist.unit,
                    status: checkIfCourseExist.status,
                    result: [...csvData]
                });
                const result_of_upload = await retrieveSessionResultDocument.save();
                console.log('result', retrieveSessionResultDocument)
                res.status(200).json({
                    message: "Uploaded successfully"
                });
            });

        stream.pipe(csvStream);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Sorry, an unknown error occuried. Please check that you are send the right inputs."
        })
    }
}
exports.postTestUploadResult = async (req, res, next) => {
    try {
        const course_code = (req.body.course_code).toUpperCase();
        const session = req.body.session;
        const result_type = req.body.result_type;
        const semester = req.body.semester;
        const url = req.protocol + '://' + req.get("host");
        const attachment = req.file;
        const checkDepartment = await Course.findOne({
            department: req.user.department
        });
        if (!checkDepartment) {
            return res.status(401).json({
                message: 'Access Denied! You can not upload result for this department'
            })
        };
        // Check if the Course exist
        const checkIfCourseExist = checkDepartment.courses.find(p => p.course_code === course_code);
        if (!checkIfCourseExist) {
            return res.status(401).json({
                message: 'Invalid Course Code'
            });
        };
        // Check if the course exist for that semester
        const checkIfSemesterCourseExist = checkIfCourseExist.semester === semester ? true : false;
        if (!checkIfSemesterCourseExist) {
            return res.status(401).json({
                message: 'Error! Invalid Semester for course code.'
            });
        };
        let stream = fs.createReadStream(req.file.path);
        let csvData = [];
        let csvStream = fastcsv
            .parse()
            .on("data", function (data) {
                csvData.push({
                    matric_no: data[1],
                    score: Number(+data[2])? +data[2] : 0
                });
            })
            .on("end", async function () {
                // remove the first line: header
                csvData.shift();
                // check for duplicate before uploading
                if (!checkMatricNumberDuplicate(csvData)) {
                    return res.status(401).json({
                        message: 'Duplicate Matric Number. Kindly check for uniqueness before uploading.'
                    });
                }
                // save to the MongoDB database collection
                const retrieveSessionResultDocument = await Test.findOne({
                    session: session,
                    semester: semester
                })
                // console.log(retrieveSessionResultDocument)
                if(!retrieveSessionResultDocument) {
                    return res.status(401).json({
                        message: 'Sorry, you can not upload for this semeser. Please wait till the portal is opened.'
                    });
                }
                retrieveSessionResultDocument.data.push({
                    course_code: checkIfCourseExist.course_code,
                    title: checkIfCourseExist.title,
                    result_type: result_type,
                    unit: checkIfCourseExist.unit,
                    status: checkIfCourseExist.status,
                    result: [...csvData]
                });
                const result_of_upload = await retrieveSessionResultDocument.save();
                console.log('result', retrieveSessionResultDocument)
                res.status(200).json({
                    message: "Uploaded successfully"
                });
            });

        stream.pipe(csvStream);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Sorry, an unknown error occuried. Please check that you are send the right inputs."
        })
    }
}
function sum(value1, value2) {
    var ca = Number(+value1)? +value1 : 0;
    var exam = Number(+value2)? +value2 : 0
    var total = ca + exam;
    return total;
}
function checkMatricNumberDuplicate(csvData) {
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

function calculateGradePoint(totalScore) {
    switch (true) {
        case totalScore >= 70:
            return 5;
        case totalScore >= 60:
            return 4;
        case totalScore >= 50:
            return 3;
        case totalScore >= 45:
            return 2;
        case totalScore >= 40:
            return 1;
        default:
            return 0;
    }
}

function calculateGrade(totalScore) {
    switch (true) {
        case totalScore >= 70:
            return 'A';
        case totalScore >= 60:
            return 'B';
        case totalScore >= 50:
            return 'C';
        case totalScore >= 45:
            return 'D';
        case totalScore >= 40:
            return 'E';
        default:
            return 'F';
    }
}
exports.getProfile = async (req, res, next) => {
    try {
        const lecturer = await Lecturer.findOne({
            _id: req.user._id
        });
        res.status(200).json({
            lecturer: lecturer
        });

    } catch {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

exports.postProfile = async (req, res, next) => {
    const name = req.body.name;
    const rank = req.body.rank;
    const department = req.body.department;
    const newpassword = req.body.newpassword;
    const password = req.body.password;
    try {
        const user = await Lecturer.findOne({
            _id: req.user._id
        })
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
            user.name = name;
            user.rank = rank;
            user.department = department;
            const result = await user.save();
            res.status(200).json({
                message: "Profile has been updated!",
                lecturer: result
            });
        } else {
            user.name = name;
            user.rank = rank;
            user.department = department;
            const result2 = user.save()
            res.status(200).json({
                message: "Profile has been updated!",
                lecturer: result2
            });
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}