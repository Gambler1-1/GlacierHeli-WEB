const express = require('express');
const { form2 } = require('../controllers/formController');
const { registerUser, loginUser, getProfile, logOut,} = require('../controllers/userController')

const router = express.Router();

router.route("/register").post(registerUser);
router.get("/profile", getProfile);
router.route("/login").post(loginUser);
router.route("/logout").post(logOut)
// router.route("/form1").post(form1);
router.route("/form2").post(form2);


module.exports = router;