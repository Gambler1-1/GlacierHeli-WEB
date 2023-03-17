const express = require("express");
const router = express.Router();
const {createTour} = require('../controllers/tourController')

router.route('/createTour').post(createTour)




module.exports = router;