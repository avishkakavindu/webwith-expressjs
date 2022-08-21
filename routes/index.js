const express = require('express');

const router = express.Router();

module.exports = () => {
    // index page
    router.get('/', (request, response) => {
        console.log('lol');
        response.render('pages/index', { pageTitle: 'Welcome' });
    });

    return router;
}
