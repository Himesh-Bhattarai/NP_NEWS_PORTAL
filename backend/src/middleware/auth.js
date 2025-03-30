// src/middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/Users');

// Middleware function
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) throw new Error('No token provided');

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded.id });
        if (!user) throw new Error('User not found');

        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Please authenticate' });
    }
};

// Role check middleware
const isReporter = (req, res, next) => {
    if (req.user.role !== 'reporter') {
        return res.status(403).json({ error: 'Reporter access required' });
    }
    next();
};

// Named exports
module.exports = {
    auth,
    isReporter
};