const Joi = require("joi");

const contentSchema = Joi.object({
    title: Joi.string().required().min(5).max(100),
    body: Joi.string().required().min(50),
    category: Joi.string().required(),
    tags: Joi.array().items(Joi.string()),
    status: Joi.string().valid('draft', 'published', 'archived')
});

const validateContent = (req, res, next) => {
    const { error } = contentSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

module.exports = validateContent;