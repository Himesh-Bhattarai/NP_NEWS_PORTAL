// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/Users');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded.id, 'tokens.token': token });

        if (!user) {
            throw new Error();
        }

        req.token = token;
        req.user = user;
        next();
    } catch (err) {
        res.status(401).send({ error: 'Please authenticate' });
    }
};

const isReporter = (req, res, next) => {
    if (req.user.role !== 'reporter') {
        return res.status(403).send({ error: 'Access denied. Reporter role required' });
    }
    next();
};

module.exports = { auth, isReporter };