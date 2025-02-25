document.getElementById("anime-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("anime-name").value;
    const genre = document.getElementById("anime-genre").value;
    const releaseYear = document.getElementById("anime-year").value;
    const description = document.getElementById("anime-description").value;

    const animeData = {
        name,
        genre,
        release_year: releaseYear,
        description
    };

    fetch("http://localhost:3001/anime", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(animeData),
    })
        .then((response) => response.json())
        .then((data) => {
            alert("Anime added successfully!");
            document.getElementById("anime-form").reset();
        })
        .catch((error) => {
            alert("Error adding anime!");
        });
});

document.getElementById("rating-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const animeId = document.getElementById("anime-id").value;
    const rating = document.getElementById("anime-rating").value;

    const ratingData = {
        anime_id: animeId,
        rating: rating
    };

    fetch("http://localhost:3001/ratings", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(ratingData),
    })
        .then((response) => response.json())
        .then((data) => {
            alert("Rating added successfully!");
            document.getElementById("rating-form").reset();
        })
        .catch((error) => {
            alert("Error adding rating!");
        });
});

document.getElementById("get-average").addEventListener("click", function () {
    const animeId = document.getElementById("average-anime-id").value;

    fetch(`http://localhost:3001/ratings/average/${animeId}`)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("average-rating").innerText = `Average Rating: ${data.average_rating}`;
        })
        .catch((error) => {
            alert("Error fetching average rating!");
        });
});
