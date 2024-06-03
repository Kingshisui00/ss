const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Load the IDs from the JSON file
const ids = require('./id.json');

// Define a route to get a random ID
app.get('/', (req, res) => {
    const randomId = ids[Math.floor(Math.random() * ids.length)];
    res.json({ id: randomId });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
