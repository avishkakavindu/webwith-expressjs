const express = require('express');

const router = express.Router();

module.exports = (params) => {
    const { feedbackService } = params;

    // feedback list
    router.get('/', async (request, response, next) => {
        try {
            const feedbacks = await feedbackService.getList();
            return response.json(feedbacks);
        } catch (error) {
            return next(error);
        }

    });

    // one feedback 
    router.post('/', (request, response, next) => {
        try {
            return response.send('feedback from posted');
        } catch (error) {
            return next(error);
        }

    });

    return router;
}
