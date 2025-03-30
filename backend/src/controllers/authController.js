const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Users = require("../models/Users");

// New User Register
const registerUser = async (req, res) => {
    try {b 
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await Users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create New User
        const newUser = new Users({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User Registered Successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
};

// User Login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await Users.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found!" });

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid email or password." });

        // Generate JWT Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ message: "Login Successful", token });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
};

module.exports = { login, registerUser };
