const express = require('express');

const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = (params) => {
    const { speakersService } = params;

    router.get('/', async (request, response) => {
        const topSpeakers = await speakersService.getList();
        const artworks = await speakersService.getAllArtwork();

        const context = {
            pageTitle: 'Welcome',
            template: 'index',
            topSpeakers,
            artworks
        }

        response.render('layouts', context);
    });

    router.use('/speakers', speakersRoute(params));
    router.use('/feedback', feedbackRoute(params));

    return router;
}
