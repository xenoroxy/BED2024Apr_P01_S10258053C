const Joi = require("joi");

const validateBook = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().min(3).max(50).require(),
        author: Joi.string().min(3).max(50).require(),
    });

    const validation = schema.validate(req.body, {
        abortEarly: false
    });

    if (validation.error) {
        const errors = validation.error.details.map((error) => error.message);
        res.status(400).json({message: "Validation error", errors });
        return;
    }

    next();
};

module.exports = validateBook;