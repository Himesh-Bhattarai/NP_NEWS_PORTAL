const express = require("express");
const { registerUser, login } = require("../controllers/authController");
const { googleCallback, googleUserAuth, googleLogin } = require("../controllers/googleAuthController");
const { validateLogin, validateRegister } = require("../middleware/validate");
const passport = require('passport'); 
const router = express.Router();


//Route 1 : Register or Signup New user
router.post('/register', validateRegister, registerUser);

// ROute 2: User login Routes
router.post('/login', validateLogin , login);


// ROutes for o google login
router.get('/google-login', googleLogin);
router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/login',
        session: false
    }),
    googleCallback
);
router.get('/google/check-user-auth', googleUserAuth);

module.exports = router; 
