const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./anime.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS anime (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            genre TEXT,
            release_year INTEGER,
            description TEXT
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS ratings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            anime_id INTEGER,
            rating INTEGER CHECK (rating >= 1 AND rating <= 10),
            FOREIGN KEY (anime_id) REFERENCES anime (id)
        )
    `);
});

db.close();
