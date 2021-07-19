const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

const adminData = require('../middleware/adminData');

const isAdminAuth = require('../middleware/isAdminAuth');

const file = require('../middleware/file');

router.get('/complaints', [isAdminAuth, adminData], adminController.getComplaints);

router.post('/complaints', [isAdminAuth, adminData], adminController.updateComplaintById);

router.post('/assignment', [isAdminAuth, adminData], adminController.postAddAssignment);

router.post('/students/register', [isAdminAuth, adminData, file], adminController.postPreRegisterStudent);

router.post('/staff/register', [isAdminAuth, adminData, file], adminController.postPreRegisterStaff);

router.get('/assignments', [isAdminAuth, adminData], adminController.getAssignments);

router.get('/assignment/:assignmentId', [isAdminAuth, adminData], adminController.getAssignmentById);

router.delete('/assignment/:assignmentId', [isAdminAuth, adminData], adminController.deleteAssignment);

router.get('/complaints/:complaintId', [isAdminAuth, adminData], adminController.getComplaintById);

router.delete('/complaints/:complaintId', [isAdminAuth, adminData], adminController.deleteComplaintById);

router.get('/users', [isAdminAuth, adminData], adminController.getUsers);

router.get('/lecturers', [isAdminAuth, adminData], adminController.getLecturers);

router.delete('/lecturers/:lecturerId', [isAdminAuth, adminData], adminController.deleteLecturer);

router.get('/lecturers/:lecturerId', [isAdminAuth, adminData], adminController.postLecturerActive);

router.delete('/users/:userId', [isAdminAuth, adminData], adminController.deleteUser);

router.get('/users/:userId', [isAdminAuth, adminData], adminController.postUserActive);

router.get('/students', [isAdminAuth, adminData], adminController.getPreregisteredStudent);

router.get('/staff', [isAdminAuth, adminData], adminController.getPreregisteredStaff);

router.post('/profile', [isAdminAuth, adminData], adminController.postProfile);

module.exports = router;