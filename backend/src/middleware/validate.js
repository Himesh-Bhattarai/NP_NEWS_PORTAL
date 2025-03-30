
// Validate user registration
const validateRegister = (req, res, next) => {
    const { username, email, password } = req.body;

    // Check required fields
    if (!email || !username || !password) {
        return res.status(400).json({
            success: false,
            message: "Email, password and username are required."
        });
    }

    // Check password length
    if (password.length < 6) {
        return res.status(400).json({
            message: "Password must be at least 6 characters long."
        });
    }

    next();
};

// Validate user login
const validateLogin = (req, res, next) => {
    const { email, password } = req.body;

    // Check required fields
    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required."
        });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({
            success: false,
            error: "Invalid email format"
        });
    }
    next();
};

module.exports = { validateLogin, validateRegister };