const express = require('express');

const router = express.Router();

const lecturerController = require('../controllers/lecturer');

const lecturerData = require('../middleware/lecturerData');

const passport = require('passport');

const isLecturerAuth = require('../middleware/isLecturerAuth');

const file = require('../middleware/file');

router.post('/assignment', [passport.authenticate('staff', {session: false}), isLecturerAuth, lecturerData], lecturerController.postAddAssignment);

router.get('/is-hod', [passport.authenticate('staff', {session: false}), isLecturerAuth, lecturerData], lecturerController.getStaffRole);

router.get('/assignments', [passport.authenticate('staff', {session: false}), isLecturerAuth, lecturerData], lecturerController.getAssignments);

router.get('/assignment/:assignmentId', [passport.authenticate('staff', {session: false}), isLecturerAuth, lecturerData], lecturerController.getAssignmentById);

router.delete('/assignment/:assignmentId', [passport.authenticate('staff', {session: false}), isLecturerAuth, lecturerData], lecturerController.deleteAssignment);

router.get('/profile', [passport.authenticate('staff', {session: false}), isLecturerAuth, lecturerData], lecturerController.getProfile);

router.post('/profile', [passport.authenticate('staff', {session: false}), isLecturerAuth, lecturerData], lecturerController.postProfile);

router.post('/result/upload', [passport.authenticate('staff', {session: false}), isLecturerAuth, lecturerData, file], lecturerController.postUploadResult);

router.post('/result/test/upload', [passport.authenticate('staff', {session: false}), isLecturerAuth, lecturerData, file], lecturerController.postTestUploadResult);




module.exports = router;