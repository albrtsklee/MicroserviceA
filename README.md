How to programmatically REQUEST data.

start server
    node server.js

fetch
  fetch("http://localhost:3001/anime/1")
    .then(response => {
        if (!response.ok) throw new Error("Anime not found");
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error.message));

fetchAnime();

How to programmatically RECEIVE data from the microservice you implemented

getAverageRating(1)

    
UML sequence diagram showing how requesting and receiving data works. Make it detailed enough that your teammate (and your grader) will understand.

![Screenshot 2025-02-25 at 12 39 41 AM](https://github.com/user-attachments/assets/fdfaf28d-3505-4abd-b127-987ed2a9140c)



![Screenshot 2025-02-25 at 12 39 41 AM](https://github.com/user-attachments/assets/40658c1e-36bc-476a-8729-8eaac21fd68a)
