const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth');

router.post('/signup', authController.postAddUser);

router.post('/login', authController.postUserLogin);

router.post('/user/reset', authController.postUserReset);

router.get('/user/reset/:token', authController.getUserNewpassword);

router.post('/user/reset/:token', authController.postUserNewPassword);

router.post('/admin/login', authController.postAdminLogin);

router.post('/staff/signup', authController.postAddStaff);

router.post('/staff/login', authController.postStaffLogin);

router.post('/staff/reset', authController.postStaffReset);

router.get('/staff/reset/:token', authController.getStaffNewpassword);

router.post('/staff/reset/:token', authController.postStaffNewPassword);

router.post('/auth/open-ticket', authController.openTicket);

module.exports = router