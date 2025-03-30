
const mongoose = require("mongoose")

const contentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    media: [{
        url: String,
        type: { type: String, enum: ['image', 'video', 'audio'] }
    }],
    category: {
        type: String,
        required: true
    },
    tags: [String],
    status: {
        type: String,
        enum: ['draft', 'published', 'archived'],
        default: 'draft'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    views: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Content', contentSchema);