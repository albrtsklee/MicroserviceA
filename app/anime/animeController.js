const db = require('../../config/db');

exports.createAnime = (req, res) => {
    const { name, genre, release_year, description } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    const query = `INSERT INTO anime (name, genre, release_year, description) VALUES (?, ?, ?, ?)`;
    db.run(query, [name, genre, release_year, description], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(201).json({
            message: 'Anime created successfully',
            animeId: this.lastID
        });
    });
};
