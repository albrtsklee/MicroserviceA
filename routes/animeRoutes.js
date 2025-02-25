const express = require('express');
const router = express.Router();
const animeController = require('../app/anime/animeController');

// POST route to create anime
router.post('/', animeController.createAnime);

module.exports = router;
