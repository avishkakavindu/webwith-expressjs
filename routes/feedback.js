const express = require('express');

const router = express.Router();

module.exports = () => {
    // feedback list
    router.get('/feedback', (request, response) => {
        return response.send('Feedback page');
    });

    // one feedback 
    router.post('/', (request, response) => {
        return response.send('feedback from posted');
    });

    return router;
}
