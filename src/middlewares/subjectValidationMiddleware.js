const { subjectSchema } = require('../schemas/subjectSchema');
const { StatusCodes } = require('http-status-codes');

// Middleware to validate subject creation and update
const validateSubject = (req, res, next) => {
    const { error } = subjectSchema.validate(req.body, {
        abortEarly: false,
        allowUnknown: false
    });
    if (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid request data', details: error.details });
    }
    next();
};

module.exports = {
    validateSubject
};