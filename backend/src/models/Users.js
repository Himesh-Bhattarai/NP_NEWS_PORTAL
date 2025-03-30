const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        enum: ['admin', 'reporter', 'user'],
        default: 'user',

    },
},
    { timestamps: true }
);

module.exports = mongoose.model("User", UserScheme);

