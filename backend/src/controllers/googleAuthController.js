// controllers/googleAuthController.js
const jwt = require('jsonwebtoken');
const passport = require('passport');


const googleCallback = (req, res) => {
    const token = jwt.sign(
        { userId: req.user._id },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    res.json({
        success: true,
        token,
        user: {
            id: req.user._id,
            email: req.user.email,
            name: req.user.name,
            role: req.user.role
        }
    });
};

const googleLogin = passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: false
});

const googleUserAuth = (req, res) => {
    if (!req.user) return res.status(401).json({ success: false });
    res.json({ success: true, user: req.user });
};

module.exports = { googleCallback, googleLogin, googleUserAuth };