const express = require('express');

// instance of express
const app = express();

const PORT = 3000;

app.get('/', (request, response) => {
    response.send('hello world');
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})