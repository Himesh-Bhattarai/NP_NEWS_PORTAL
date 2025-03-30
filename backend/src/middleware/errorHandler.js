// middleware/errorHandler.js
class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotFoundError';
        this.statusCode = 404;
    }
}

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
        this.statusCode = 400;
    }
}

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    const statusCode = err.statusCode || 500;
    const message = statusCode === 500 ? 'Something went wrong' : err.message;

    res.status(statusCode).json({
        error: {
            message,
            status: statusCode,
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
        }
    });
};

module.exports = {errorHandler,NotFoundError,ValidationError};