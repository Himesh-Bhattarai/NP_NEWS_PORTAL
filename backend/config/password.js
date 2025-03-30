// config/passportConfig.js
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

module.exports = (passport) => {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/auth/google/callback",
        passReqToCallback: true
    },
        async (req, accessToken, refreshToken, profile, done) => {
            try {
                let user = await User.findOne({
                    $or: [
                        { googleId: profile.id },
                        { email: profile.emails[0].value }
                    ]
                });

                if (!user) {
                    user = await User.create({
                        googleId: profile.id,
                        email: profile.emails[0].value,
                        name: profile.displayName,
                        role: 'client'
                    });
                } else if (!user.googleId) {
                    user.googleId = profile.id;
                    await user.save();
                }

                return done(null, user);
            } catch (err) {
                return done(err, null);
            }
        }));
};