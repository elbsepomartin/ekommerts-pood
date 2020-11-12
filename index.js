const express = require('express');
const mongoose = require('mongoose');

// Start Express
const app = express();

// Dotenv config
require('dotenv').config();

// Hello World
app.get('/', async(req, res) => {
    res.status(200).send('Hello World!')
})

// Database connection
mongoose.connect(process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('connected to DB!')
);

// Port listen
app.listen(process.env.PORT);