const User = require('../models/User')
const bcrypt = require('bcryptjs')
const bodyParser = require('body-parser');
const salt = bcrypt.genSaltSync(10);
const secret = '2asdfqfqf1231rqwdqw2feg3';
const jwt = require('jsonwebtoken');



//REGISTER USER ONLY IN CONTROL OF SUPERADMIN
exports.registerUser = async (req, res) => {
    
    const { name ,email, password, phoneNum, country } = req.body;
    
    try {
        const userDoc = await User.create
            ({
                ...req.body,
                password: bcrypt.hashSync(password, salt),
            });
        res.json(userDoc);
    }
    
    catch (e) {
        res.status(400).json(e);
    }

};


//SYSTEM ADMINISTRATORS LOGIN
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(email,password)
    const userDoc = await User.findOne({ email });
    if (!userDoc) {
        return res.status(404).json('User not found');
    }
    const passwordCheck = bcrypt.compareSync(password, userDoc.password);
    if (passwordCheck) {
        jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;
            // res.cookie('token', token).json({
            //     id: userDoc._id,
            //     email,
            // });

            console.log(token,'TOKEN')
            res.status(200).json({msg:'LOGGED IN SUCCESSFULLY',token, user: userDoc})
        });
    } else {
        res.status(400).json({msg:"INCORRECT CREDENTIALS"});
    }
};

//GET PROFILE
exports.getProfile = (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info)
    })
    res.json(req.cookies);
}

//LOGOUT USER
exports.logOut = (req, res) => {
    res.cookie('token', '').json('ok')
}

