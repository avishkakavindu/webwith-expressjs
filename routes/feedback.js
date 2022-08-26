const express = require('express');
const { check, validationResult } = require('express-validator');

const router = express.Router();

module.exports = (params) => {
    const { feedbackService } = params;

    // feedback list
    router.get('/', async (request, response, next) => {
        try {
            const feedbacks = await feedbackService.getList();
            // ? means if the request.session.feedback exists then: else
            const validationErrors = request.session.feedback ? request.session.feedback.errors : false;
            request.session.feedback = {};
            console.log(validationErrors)
            const context = {
                pageTitle: 'Feedbacks',
                template: 'feedback',
                feedbacks,
                validationErrors
            }
            return response.render('layouts', context);
        } catch (error) {
            return next(error);
        }

    });

    // one feedback 
    router.post('/', [
        check('name')
            .trim()
            .isLength({ min: 3 })
            .escape()
            .withMessage('A name is required'),
        check('email')
            .trim()
            .isEmail()
            .normalizeEmail()
            .escape()
            .withMessage('A valid email is required'),
        check('title')
            .trim()
            .isLength({ min: 3 })
            .escape()
            .withMessage('A title is required'),
        check('message')
            .trim()
            .isLength({ min: 5 })
            .escape()
            .withMessage('A message is required')
    ],
        (request, response, next) => {
            try {
                const validationErrors = validationResult(request);

                if (!validationErrors.isEmpty()) {
                    request.session.feedback = {
                        errors: validationErrors.array()
                    };

                    return response.redirect('/feedback')
                }

                return response.send('feedback from posted');
            } catch (error) {
                return next(error);
            }

        });

    return router;
}
