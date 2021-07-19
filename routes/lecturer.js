const express = require('express');

const router = express.Router();

const lecturerController = require('../controllers/lecturer');

const lecturerData = require('../middleware/lecturerData');

const isLecturerAuth = require('../middleware/isLecturerAuth');

const file = require('../middleware/file');

router.post('/assignment', [isLecturerAuth, lecturerData], lecturerController.postAddAssignment);

router.get('/is-hod', [isLecturerAuth, lecturerData], lecturerController.getStaffRole);

router.get('/assignments', [isLecturerAuth, lecturerData], lecturerController.getAssignments);

router.get('/assignment/:assignmentId', [isLecturerAuth, lecturerData], lecturerController.getAssignmentById);

router.delete('/assignment/:assignmentId', [isLecturerAuth, lecturerData], lecturerController.deleteAssignment);

router.get('/profile', [isLecturerAuth, lecturerData], lecturerController.getProfile);

router.post('/profile', [isLecturerAuth, lecturerData], lecturerController.postProfile);

router.post('/result/upload', [isLecturerAuth, lecturerData, file], lecturerController.postUploadResult);

router.post('/result/test/upload', [isLecturerAuth, lecturerData, file], lecturerController.postTestUploadResult);




module.exports = router;