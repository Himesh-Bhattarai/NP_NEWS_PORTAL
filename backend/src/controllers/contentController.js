const Content = require("../models/Content");
const { NotFoundError } = require('../utils/errors');

const createContent = async (req, res) => {
    try {
        const { title, body, category, tags, status } = req.body;

        const content = new Content({
            title,
            body,
            author: req.user.id,
            media: req.files ? req.files.map(file => ({
                url: `/uploads/${file.filename}`,
                type: file.mimetype.split('/')[0]
            })) : [],
            category,
            tags: tags?.split(',').map(tag => tag.trim()) || [],
            status: status || 'draft'
        });

        await content.save();
        res.status(201).json(content);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllContent = async (req, res) => {
    try {
        const content = await Content.find({ status: 'published' })
            .populate('author', 'username profile.avatar')
            .sort({ createdAt: -1 });

        res.json(content);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getContentById = async (req, res) => {
    try {
        const content = await Content.findById(req.params.id)
            .populate('author', "username profile.avatar");

        if (!content) {
            throw new NotFoundError('Content not found');
        }

        content.views += 1;
        await content.save();

        res.json(content);
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

const getReporterContent = async (req, res) => {
    try {
        const content = await Content.find({ author: req.user.id })
            .sort({ createdAt: -1 });

        res.json(content);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateContent = async (req, res) => {
    try {
        const content = await Content.findOneAndUpdate(
            { _id: req.params.id, author: req.user.id },
            req.body,
            { new: true, runValidators: true }
        );

        if (!content) {
            throw new NotFoundError('Content not found');
        }

        res.json(content);
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

const deleteContent = async (req, res) => {
    try {
        const content = await Content.findOneAndDelete({
            _id: req.params.id,
            author: req.user.id,
        });

        if (!content) {
            throw new NotFoundError("Content Not Found");
        }

        res.json({ message: "Content Deleted" });
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
};

module.exports = {
    createContent,
    getAllContent,
    getContentById,
    getReporterContent,
    updateContent,
    deleteContent
};
