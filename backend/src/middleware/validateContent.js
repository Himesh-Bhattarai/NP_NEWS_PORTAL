const Joi = require("joi");

const contentSchema = Joi.object({
    title: Joi.string().required().min(5).max(100)
        .messages({
            'string.empty': 'Title cannot be empty',
            'string.min': 'Title must be at least {#limit} characters',
            'any.required': 'Title is required'
        }),
    body: Joi.string().required().min(50)
        .messages({
            'string.min': 'Content must be at least {#limit} characters'
        }),
    category: Joi.string().required(),
    tags: Joi.alternatives().try(
        Joi.string().pattern(/,/),
        Joi.array().items(Joi.string())
    ),
    status: Joi.string().valid('draft', 'published', 'archived')
}).options({ abortEarly: false });

const validateContent = (req, res, next) => {
    const data = { ...req.body };

    // Convert tags to array if needed
    if (typeof data.tags === 'string') {
        data.tags = data.tags.split(',').map(tag => tag.trim());
    }

    const { error } = contentSchema.validate(data);

    if (error) {
        const errors = error.details.map(err => ({
            field: err.path[0],
            message: err.message
        }));
        return res.status(400).json({ success: false, errors });
    }

    next();
};

module.exports = validateContent;