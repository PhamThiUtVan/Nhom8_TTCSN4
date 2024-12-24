const express = require('express')
const router = express.Router()
const authController = require('../../controller/client/auth.controller')
router.get('/login',authController.login)
router.post('/login',authController.loginValidation)
router.get('/logout',authController.logout)
router.get('/signUp',authController.signUp)
router.post('/register',authController.register)


module.exports = router