const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load the .env file before accessing environment variables
dotenv.config();

const app = express();

// Access the MONGODB_URL after dotenv is configured
const MONGODB_URL = process.env.MONGODB_URL;
const port = parseInt(process.env.PORT, 10) || 3001; // Default to 3001 if PORT is not set

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Update the connection to remove deprecated options
mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log('Connected to MongoDB...');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB...', err);
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
