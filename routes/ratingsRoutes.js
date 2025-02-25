const express = require('express');
const router = express.Router();
const ratingsController = require('../app/ratings/ratingsController');

// POST route to add rating
router.post('/', ratingsController.addRating);

// DELETE route to delete rating
router.delete('/:anime_id', ratingsController.deleteRating);

// GET route to get average rating
router.get('/average/:anime_id', ratingsController.getAverageRating);

module.exports = router;
