const jwt = require('jsonwebtoken');
const secret = '2asdfqfqf1231rqwdqw2feg3';

const auth = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = decoded;
        next();
    });
};


function requireLogin(req, res, next) {
    if (req.session.user) { // check if user is logged in
        next(); // allow access to the route
    } else {
        res.redirect('/admin'); // redirect to login page if user is not logged in
    }
}

module.exports = auth;