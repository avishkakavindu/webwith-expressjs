const express = require('express');

const router = express.Router();

module.exports = (params) => {
    const { speakersService } = params;

    // speaker list
    router.get('/', async (request, response) => {
        const speakers = await speakersService.getList();

        return response.json(speakers);
    });

    // speaker by name
    router.get('/:shortname', (request, response) => {
        return response.send(`Speakers shortname ${request.params.shortname}`);
    });

    return router;
}
