'use strict'

const express = require('express')
const router = express.Router()
const { signup, login, accountVerify, users, changePassword, userDetails, userUpdate, forgetLink, updatePassword, forgetPassword, userDelete } = require('../controllers/userControllers')
const { isAuthenticatedUser, authenticateToken } = require('../middlewares/authMiddlewares')
const upload = require("./../utils/multerConfig"); // Import the multer configuration

router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/verify-account').get(accountVerify)
router.route('/forget-password').get(forgetPassword)
router.route('/changePassword').post(changePassword)
router.route('/user-details').post(userDetails)
// router.route('/user-update').put(userUpdate)
router.route('/user-delete').post(userDelete)
router.route('/user-forget-link').post(forgetLink)
router.route('/users').get(users)
router.put("/user-update",upload.fields([{name: "image",maxCount: 5,}, ]),userUpdate);

module.exports = router;