const express = require('express');
const path = require('path');

// routes
const routes = require('./routes/index');

// instance of express
const app = express();

// set view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Middlewares
// - static file paths
app.use(express.static(path.join(__dirname, './static')));

app.use('/', routes());

const PORT = 3000;

// speakers page
app.get('/speakers', (request, response) => {
    response.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
