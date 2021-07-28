const express = require('express');

const router = express.Router();

const userController = require('../controllers/users');

const passport = require('passport');

const userData = require('../middleware/userData');

const isUserAuth = require('../middleware/isUserAuth');

const file = require('../middleware/file');

router.post('/complaints/create', [passport.authenticate('student', {session: false}), isUserAuth, userData], userController.createComplaint);

router.get('/complaints', [passport.authenticate('student', {session: false}), isUserAuth, userData], userController.getComplaints);

router.get('/results', [passport.authenticate('student', {session: false}), isUserAuth, userData], userController.getResults);

router.get('/test/results', [passport.authenticate('student', {session: false}), isUserAuth, userData], userController.getTestResults);

router.get('/complaints/:complaintId', [passport.authenticate('student', {session: false}), isUserAuth, userData], userController.getComplaintById);

router.post('/complaints/update/:complaintId', [passport.authenticate('student', {session: false}), isUserAuth, userData], userController.updateComplaint);
// router.delete('/complaints/:complaintId', [passport.authenticate('student', {session: false}), isUserAuth, userData], complaintController.deleteComplaintById);

router.post('/assignment/submit', [passport.authenticate('student', {session: false}), isUserAuth, userData, file], userController.postSubmitAssignment);

router.get('/assignments', [passport.authenticate('student', {session: false}), isUserAuth, userData], userController.getAssignments);

router.get('/assignment/:assignmentId', [passport.authenticate('student', {session: false}), isUserAuth, userData], userController.getAssignmentById);

router.get('/profile', [passport.authenticate('student', {session: false}), isUserAuth, userData], userController.getProfile);

router.post('/profile', [passport.authenticate('student', {session: false}), isUserAuth, userData], userController.postProfile);

module.exports = router;