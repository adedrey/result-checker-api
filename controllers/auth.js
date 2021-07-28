const User = require('../models/users');
const Lecturer = require('../models/lecturer');
const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');
const Student = require('../models/students');
const Complaint = require('../models/complaints');
const Staff = require('../models/staff');
const jwt = require('jsonwebtoken');
const utils = require('../lib/utils');
const crypto = require("crypto");
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: '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'
    }
}));


exports.postAddUser = (req, res, next) => {
    //...
    const surname = req.body.surname;
    const firstname = req.body.firstname;
    const course = req.body.course;
    const email = req.body.email;
    const password = req.body.password;
    const matric_no = req.body.matric_no;

    Student.findOne({
            matric_no: matric_no
        })
        .then(student => {
            if (!student) {
                return res.status(401).json({
                    message: "Record not found. Contact the Administrator"
                })
            }
            User.findOne({
                    matric_no: matric_no
                })
                .then(user => {
                    if (user) {
                        return res.status(401).json({
                            message: 'Sorry, you have already registered!'
                        })
                    }
                    return bcrypt.hash(password, 12)
                        .then(hashPassword => {
                            const newUser = new User({
                                surname: surname,
                                firstname: firstname,
                                course: course,
                                email: email,
                                password: hashPassword,
                                matric_no: matric_no
                            });
                            return newUser.save()
                                .then(result => {
                                    res.status(200).json({
                                        message: 'Registration Successful. Please Login.'
                                    })
                                })
                                .catch(err => {
                                    res.status(500).json({
                                        message: "Sorry, email already exist."
                                    })
                                })
                        })
                        .catch(err => {
                            res.status(500).json({
                                message: "Sorry, we couldn't complete your request. Please try again in a moment."
                            })
                        })
                })
                .catch(err => {
                    res.status(500).json({
                        message: err
                    })
                })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
}
exports.postUserLogin = async (req, res, next) => {
    const matric_no = (req.body.matric_no).toUpperCase().trim()
    const password = req.body.password;

    try {
        const user = await User.findOne({
            matric_no: matric_no
        });
        if (!user) {
            return res.status(401).json({
                message: "Access Denied!"
            });
        }
        const isValid = utils.validPassword(password, user.hash, user.salt);
        if (!user.is_active) {
            return res.status(401).json({
                message: "Sorry, your account has been temporarily block. Kindly contact the Administrator for further directives."
            });
        }
        if (isValid) {
            const tokenObject = utils.issueJWT(user);
            res.status(200).json({
                success: true,
                user: user,
                token: tokenObject.token,
                expiresIn: tokenObject.expires
            })
        } else {
            return res.status(401).json({
                message: "Access Denied!"
            });
        }
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}
exports.postUserReset = async (req, res, next) => {
    const email = req.body.email;
    let token;
    try {
        const cryt = await crypto.randomBytes(32, (err, Buffer) => {
            if (err) {
                return res.status(401).json({
                    message: 'An unknown error occured'
                })
            }
            token = Buffer.toString('hex');
        });
        console.log(token);
        const user = await User.findOne({
            email: email
        });
        if (!user) {
            return res.status(401).json({
                message: 'Email does not exist!'
            });
        }
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 3600000;
        const result = await user.save();
        const message = await transporter.sendMail({
            to: email,
            from: 'reset@afit.edu.ng',
            subject: 'Reset Password',
            html: `
                                   <p>Reset password request</p>
                                   <p>Dear ${user.surname}</p>
                                   <p>Click this <a href='http://localhost:8100/reset/${token}'>link</a> to reset your password.
                                   This link is valid for just one hour.</p>
                                `
        });
        res.status(200).json({
            message: 'Kindly check your mail for further directives. Thank you.'
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}
exports.getUserNewpassword = async (req, res, next) => {
    const token = req.params.token;
    try {
        const user = await User.findOne({
            resetToken: token,
            resetTokenExpiration: {
                $gt: Date.now()
            }
        });
        if (!user) {
            return res.status(401).json({
                message: 'Invalid Credentials!'
            });
        }
        res.status(200).json({
            resetToken: token,
            userId: user._id
        });

    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        });
    }
}
exports.postUserNewPassword = async (req, res, next) => {
    const token = req.params.token;
    const password = req.body.password;
    const saltHash = utils.genPassword(password);
    const salt = saltHash.salt;
    const hash = saltHash.hash;
    const userId = req.body.userId;
    try {
        const user = await User.findOne({
            _id: userId,
            resetToken: token,
            resetTokenExpiration: {
                $gt: Date.now()
            }
        });
        if (!user) {
            return res.status(401).json({
                message: 'Invalid credentials! Try again!'
            })
        }
        
        user.hash = hash;
        user.salt = salt;
        user.resetToken = undefined;
        user.resetTokenExpiration = undefined;
        const result = await user.save();
        const message = await transporter.sendMail({
            to: user.email,
            from: 'success@afit.edu.ng',
            subject: 'Password reset successful',
            html: '<p>You have successfully changed your password!</p>'
        });
        res.status(200).json({
            message: 'Password reset successful'
        })
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

exports.postAdminLogin = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const user = await Admin.findOne({
            username: username
        });
        if (!user) {
            return res.status(401).json({
                message: 'Access Denied!'
            })
        }
        const isValid = utils.validPassword(password, user.hash, user.salt);
        if (!isValid) {
            return res.status(401).json({
                message: "Access Declined!"
            });
        }
        const tokenObject = utils.issueJWT(user);
        res.status(200).json({
            success: true,
            token: tokenObject.token,
            expiresIn: tokenObject.expires
        })
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        });
    }
}

exports.postAddStaff = (req, res, next) => {
    //...
    const name = req.body.name;
    const rank = req.body.rank;
    const department = req.body.department;
    const email = req.body.email;
    const password = req.body.password;
    const staff_no = req.body.staff_no;

    Staff.findOne({
            file_no: staff_no
        })
        .then(staff => {
            if (!staff) {
                return res.status(401).json({
                    message: "Staff record not found. Contact the Administrator"
                })
            }
            Lecturer.findOne({
                    staff_no: staff_no
                })
                .then(user => {
                    if (user) {
                        return res.status(401).json({
                            message: 'Sorry, you have already registered!'
                        })
                    }
                    return bcrypt.hash(password, 12)
                        .then(hashPassword => {
                            const newUser = new Lecturer({
                                name: name,
                                rank: rank,
                                department: department,
                                email: email,
                                password: hashPassword,
                                staff_no: staff_no
                            });
                            return newUser.save()
                                .then(result => {
                                    res.status(200).json({
                                        message: 'Registration Successful. Please Login.'
                                    })
                                })
                                .catch(err => {
                                    res.status(500).json({
                                        message: "Sorry, email already exist."
                                    })
                                })
                        })
                        .catch(err => {
                            res.status(500).json({
                                message: "Sorry, we couldn't complete your request. Please try again in a moment."
                            })
                        })
                })
                .catch(err => {
                    res.status(500).json({
                        message: err
                    })
                })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
}
exports.postStaffLogin = async (req, res, next) => {
    const staff_no = req.body.staff_no;
    const password = req.body.password;
    try {
        const user = await Lecturer.findOne({
            staff_no: staff_no
        });
        if (!user) {
            return res.status(401).json({
                message: "Access Denied!"
            });
        }
        const isValid = utils.validPassword(password, user.hash, user.salt);
        if (!user.is_active) {
            return res.status(401).json({
                message: "Sorry, your account has been temporarily block. Kindly contact the Administrator for further directives."
            });
        }
        if (isValid) {
            const tokenObject = utils.issueJWT(user);
            res.status(200).json({
                success: true,
                user: user,
                token: tokenObject.token,
                expiresIn: tokenObject.expires
            })
        } else {
            return res.status(401).json({
                message: "Access Denied!"
            });
        }
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

exports.postStaffReset = async (req, res, next) => {
    const email = req.body.email;
    let token;
    const cryt = await crypto.randomBytes(32, (err, Buffer) => {
        if (err) {
            return res.status(401).json({
                message: 'An unknown error occured'
            })
        }
        token = Buffer.toString('hex');
    });
    try {
        const user = await Lecturer.findOne({
            email: email
        });
        if (!user) {
            return res.status(401).json({
                message: 'Email does not exist!'
            });
        }
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 3600000;
        const result = await user.save();
        const message = await transporter.sendMail({
            to: email,
            from: 'reset@afit.edu.ng',
            subject: 'Reset Password',
            html: `
                               <p>Reset password request</p>
                               <p>Dear ${user.name}</p>
                               <p>Click this <a href='http://localhost:8100/staff/reset/${token}'>link</a> to reset your password.
                               This link is valid for just one hour.</p>
                            `
        });
        res.status(200).json({
            message: 'Kindly check your mail for further directives. Thank you.'
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }

}
exports.getStaffNewpassword = async (req, res, next) => {
    const token = req.params.token;
    try {
        const user = await Lecturer.findOne({
            resetToken: token,
            resetTokenExpiration: {
                $gt: Date.now()
            }
        });
        if (!user) {
            return res.status(401).json({
                message: 'Invalid Credentials!'
            });
        }
        res.status(200).json({
            resetToken: token,
            lecturerId: user._id
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}
exports.postStaffNewPassword = async (req, res, next) => {
    const token = req.params.token;
    const password = req.body.password;
    const saltHash = utils.genPassword(password);
    const salt = saltHash.salt;
    const hash = saltHash.hash;
    const lecturerId = req.body.lecturerId;
    try {
        const user = await Lecturer.findOne({
            _id: lecturerId,
            resetToken: token,
            resetTokenExpiration: {
                $gt: Date.now()
            }
        });
        if (!user) {
            return res.status(401).json({
                message: 'Invalid credentials! Try again!'
            })
        }
        const hashedPassword = await bcrypt.hash(newPassword, 12)
        user.hash = hash;
        user.salt = salt;
        user.resetToken = undefined;
        user.resetTokenExpiration = undefined;
        const result = await user.save();
        const message = await transporter.sendMail({
            to: user.email,
            from: 'success@afit.edu.ng',
            subject: 'Password reset successful',
            html: '<p>You have successfully changed your password!</p>'
        });
        res.status(200).json({
            message: 'Password reset successful'
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}

exports.openTicket = async (req, res, next) => {
    const case_type = req.body.case_type;
    const title = req.body.title;
    const body = req.body.body;

    const complaint = new Complaint({
        case_type: case_type,
        title: title,
        body: body,
        matric_no: 'open'
    });
    try {
        const result = await complaint.save();
        res.status(200).json({
            message: "Ticket Delivered!"
        });
    } catch (err) {
        res.status(500).json({
            message: "Sorry, we couldn't complete your request. Please try again in a moment."
        })
    }
}