const express = require('express')
const router = express.Router()
const cartController = require('../../controller/admin/cart.controller')
router.get('/',cartController.cart)

module.exports = router