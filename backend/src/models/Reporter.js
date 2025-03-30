const mongoose = require("mongoose");

const reporterSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require: true,
    },
    isVerified: {
        default: false,
        type: Boolean,
    },
    bio: {
        type: String,
        default: ' ',

    },
},
    { timestamps: true }
)

module.exports = mongoose.model("Reporter", reporterSchema);