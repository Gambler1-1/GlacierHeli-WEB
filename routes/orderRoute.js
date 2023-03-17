const express = require("express");
const router = express.Router();
const {createOrder} = require('../controllers/orderController')

router.route('/createOrder').post(createOrder)




module.exports = router;