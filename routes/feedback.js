const express = require('express');

const router = express.Router();

module.exports = (params) => {
    const { feedbackService } = params;

    // feedback list
    router.get('/', async (request, response) => {
        const feedbacks = await feedbackService.getList();
        return response.json(feedbacks);
    });

    // one feedback 
    router.post('/', (request, response) => {
        return response.send('feedback from posted');
    });

    return router;
}
