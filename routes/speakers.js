const express = require('express');

const router = express.Router();

module.exports = () => {
    // speaker list
    router.get('/', (request, response) => {
        console.log('ccc');
        return response.send('Speakers list');
    });

    // speaker by name
    router.get('/:shortname', (request, response) => {
        console.log('ccc');
        return response.send(`Speakers shortname ${request.params.shortname}`);
    });

    return router;
}
