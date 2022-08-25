const express = require('express');

const router = express.Router();

module.exports = (params) => {
    const { speakersService } = params;

    // speaker list
    router.get('/', async (request, response) => {
        const speakers = await speakersService.getList();
        console.log(speakers);
        return response.render(
            'layouts',
            { pageTitle: 'Speakers', template: 'speakers', speakers }
        );
    });

    // speaker by name
    router.get('/:shortname', (request, response) => {
        return response.send(`Speakers shortname ${request.params.shortname}`);
    });

    return router;
}
