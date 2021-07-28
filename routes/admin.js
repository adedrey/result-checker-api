const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

const adminData = require('../middleware/adminData');

const passport = require('passport');

const isAdminAuth = require('../middleware/isAdminAuth');

const file = require('../middleware/file');

router.get('/complaints', [passport.authenticate('admin', {session: false}), isAdminAuth, adminData], adminController.getComplaints);

router.post('/complaints', [passport.authenticate('admin', {session: false}), isAdminAuth, adminData], adminController.updateComplaintById);

router.post('/assignment', [passport.authenticate('admin', {session: false}), isAdminAuth, adminData], adminController.postAddAssignment);

router.post('/students/register', [passport.authenticate('admin', {session: false}), isAdminAuth, adminData, file], adminController.postPreRegisterStudent);

router.post('/staff/register', [passport.authenticate('admin', {session: false}), isAdminAuth, adminData, file], adminController.postPreRegisterStaff);

router.get('/assignments', [passport.authenticate('admin', {session: false}), isAdminAuth, adminData], adminController.getAssignments);

router.get('/assignment/:assignmentId', [passport.authenticate('admin', {session: false}), isAdminAuth, adminData], adminController.getAssignmentById);

router.delete('/assignment/:assignmentId', [passport.authenticate('admin', {session: false}), isAdminAuth, adminData], adminController.deleteAssignment);

router.get('/complaints/:complaintId', [passport.authenticate('admin', {session: false}), isAdminAuth, adminData], adminController.getComplaintById);

router.delete('/complaints/:complaintId', [passport.authenticate('admin', {session: false}), isAdminAuth, adminData], adminController.deleteComplaintById);

router.get('/users', [passport.authenticate('admin', {session: false}), isAdminAuth, adminData], adminController.getUsers);

router.get('/lecturers', [passport.authenticate('admin', {session: false}), isAdminAuth, adminData], adminController.getLecturers);

router.delete('/lecturers/:lecturerId', [passport.authenticate('admin', {session: false}), isAdminAuth, adminData], adminController.deleteLecturer);

router.get('/lecturers/:lecturerId', [passport.authenticate('admin', {session: false}), isAdminAuth, adminData], adminController.postLecturerActive);

router.delete('/users/:userId', [passport.authenticate('admin', {session: false}), isAdminAuth, adminData], adminController.deleteUser);

router.get('/users/:userId', [passport.authenticate('admin', {session: false}), isAdminAuth, adminData], adminController.postUserActive);

router.get('/students', [passport.authenticate('admin', {session: false}), isAdminAuth, adminData], adminController.getPreregisteredStudent);

router.get('/staff', [passport.authenticate('admin', {session: false}), isAdminAuth, adminData], adminController.getPreregisteredStaff);

router.post('/profile', [passport.authenticate('admin', {session: false}), isAdminAuth, adminData], adminController.postProfile);

module.exports = router;