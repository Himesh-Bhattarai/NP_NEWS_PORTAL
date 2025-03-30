const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        contentType: {
            type: String,
            enum: ['text', 'image', 'video', 'audio'], 
            required: true,
        },
        mediaUrl: {
            type: String, 
        },
        contentText: {
            type: String, 
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'approved'],
            default: 'pending',
        },
        isVerifiedReporter: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Content', contentSchema);
