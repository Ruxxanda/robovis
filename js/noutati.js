document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.getElementById("newsContainer");

    fetch("../data/noutati.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((noutate) => {
                const newsItem = document.createElement("div");
                newsItem.classList.add("news-item");

                newsItem.innerHTML = `
                    <h2>${noutate.titlu}</h2>
                    <p><strong>Data:</strong> ${noutate.data}</p>
                    <p>${noutate.continut}</p>
        `;

                newsContainer.appendChild(newsItem);
    });
        })
        .catch((error) => {
            console.error("Eroare la încărcarea noutăților:", error);
        });
});
