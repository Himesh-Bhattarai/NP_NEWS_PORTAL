const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/Users");
const { NotFoundError, BadRequestError } = require('../middleware/errorHandler');

// Register New User
const registerUser = async (req, res) => {
    try {
        const { username, email, password, role = 'user' } = req.body;

        // Validation
        if (!username || !email || !password) {
            throw new BadRequestError('All fields are required');
        }

        // Check existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new BadRequestError('User already exists');
        }

        // Create user
        const user = new User({
            username,
            email,
            password: await bcrypt.hash(password, 10),
            role
        });

        await user.save();

        res.status(201).json({
            success: true,
            data: { id: user._id, email: user.email }
        });

    } catch (error) {
        res.status(error.statusCode || 500).json({
            success: false,
            error: error.message
        });
    }
};

// User Login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            throw new NotFoundError('User not found');
        }

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new BadRequestError('Invalid credentials');
        }

        // Generate token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({
            success: true,
            data: { token, userId: user._id }
        });

    } catch (error) {
        res.status(error.statusCode || 500).json({
            success: false,
            error: error.message
        });
    }
};

// Token Verification
const verifyToken = (req, res) => {
    res.json({
        success: true,
        data: {
            user: {
                id: req.user._id,
                role: req.user.role
            },
            expiresAt: new Date(req.decodedToken.exp * 1000)
        }
    });
};

module.exports = { registerUser, login, verifyToken };