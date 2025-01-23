function displayNews() {
    const newsContainer = document.getElementById('newsContainer');
    const newsList = JSON.parse(localStorage.getItem('newsList')) || [];

    newsContainer.innerHTML = '';

    newsList.reverse().forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('news-item');

        let imagesHtml = '';
        if (news.imageUrls && news.imageUrls.length > 0) {
            imagesHtml += '<div class="image-container">';
            news.imageUrls.forEach(url => {
                imagesHtml += `<img src="${url}" alt="Imagine">`;
            });
            imagesHtml += '</div>';
        }

        newsDiv.innerHTML = `
            <h2>${news.title || 'Fără titlu'}</h2>
            <p>${news.content || 'Fără conținut'}</p>
            ${imagesHtml}
            <p class="date">${news.date || 'Data necunoscută'}</p>
        `;
        newsContainer.appendChild(newsDiv);
    });
}

window.addEventListener('load', displayNews);

window.addEventListener('load', loadNews);
