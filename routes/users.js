const express = require('express');

const router = express.Router();

const userController = require('../controllers/users');

const userData = require('../middleware/userData');

const isUserAuth = require('../middleware/isUserAuth');

const file = require('../middleware/file');

router.post('/complaints/create', [isUserAuth, userData], userController.createComplaint);

router.get('/complaints', [isUserAuth, userData], userController.getComplaints);

router.get('/results', [isUserAuth, userData], userController.getResults);

router.get('/test/results', [isUserAuth, userData], userController.getTestResults);

router.get('/complaints/:complaintId', [isUserAuth, userData], userController.getComplaintById);

router.post('/complaints/update/:complaintId', [isUserAuth, userData], userController.updateComplaint);
// router.delete('/complaints/:complaintId', [isUserAuth, userData], complaintController.deleteComplaintById);

router.post('/assignment/submit', [isUserAuth, userData, file], userController.postSubmitAssignment);

router.get('/assignments', [isUserAuth, userData], userController.getAssignments);

router.get('/assignment/:assignmentId', [isUserAuth, userData], userController.getAssignmentById);

router.get('/profile', [isUserAuth, userData], userController.getProfile);

router.post('/profile', [isUserAuth, userData], userController.postProfile);

module.exports = router;