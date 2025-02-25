const db = require('../../config/db');

exports.addRating = (req, res) => {
    const { anime_id, rating } = req.body;

    if (!anime_id || !(rating >= 1 && rating <= 10)) {
        return res.status(400).json({ error: 'Valid anime_id and rating (1-10) are required' });
    }

    const query = `INSERT INTO ratings (anime_id, rating) VALUES (?, ?)`;
    db.run(query, [anime_id, rating], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(201).json({
            message: 'Rating added successfully',
            ratingId: this.lastID
        });
    });
};

exports.deleteRating = (req, res) => {
    const { anime_id } = req.params;

    const query = `DELETE FROM ratings WHERE anime_id = ?`;
    db.run(query, [anime_id], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json({
            message: `Ratings for anime ${anime_id} deleted successfully`
        });
    });
};

exports.getAverageRating = (req, res) => {
    const { anime_id } = req.params;

    const query = `SELECT rating FROM ratings WHERE anime_id = ?`;
    db.all(query, [anime_id], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (rows.length === 0) {
            return res.status(404).json({ error: 'No ratings found for this anime' });
        }

        const avgRating = rows.reduce((sum, row) => sum + row.rating, 0) / rows.length;
        return res.status(200).json({ average_rating: avgRating });
    });
};
