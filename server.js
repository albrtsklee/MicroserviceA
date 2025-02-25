const express = require('express');
const app = express();
const animeRoutes = require('./routes/animeRoutes');
const ratingsRoutes = require('./routes/ratingsRoutes');
const path = require('path');

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/anime', animeRoutes);
app.use('/ratings', ratingsRoutes);

// Start the server
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
