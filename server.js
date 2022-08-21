const express = require('express');
const path = require('path');

const FeedbackService = require('./services/FeedbackService');
const SpeakersService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./data/feedback.json');
const speakersService = new SpeakersService('./data/speakers.json')

const routes = require('./routes/index');

// instance of express
const app = express();

// set view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Middlewares
// - static file paths
app.use(express.static(path.join(__dirname, './static')));

app.use('/', routes({
    feedbackService,
    speakersService
}));

const PORT = 3000;

// // speakers page
// app.get('/speakers', (request, response) => {
//     response.sendFile(path.join(__dirname, './static/speakers.html'));
// });

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
