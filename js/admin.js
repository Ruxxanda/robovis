document.getElementById('publish').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageInput = document.getElementById('image').files;
    const date = document.getElementById('date').value;

    let imageUrls = [];
    if (imageInput.length > 0) {
        let imagesLoaded = 0;
        Array.from(imageInput).forEach(image => {
            const reader = new FileReader();
            reader.onload = () => {
                imageUrls.push(reader.result);
                imagesLoaded++;
                if (imagesLoaded === imageInput.length) {
                    saveNews({ title, content, imageUrls, date });
                }
            };
            reader.readAsDataURL(image);
        });
    } else {
        saveNews({ title, content, imageUrls, date });
    }
});

function saveNews(news) {
    const newsList = JSON.parse(localStorage.getItem('newsList')) || [];
    newsList.push(news);
    localStorage.setItem('newsList', JSON.stringify(newsList));
    alert('Noutatea a fost publicată!');
    loadNews();
}

function loadNews() {
    const newsList = JSON.parse(localStorage.getItem('newsList')) || [];
    const newsListContainer = document.getElementById('newsList');

    newsListContainer.innerHTML = '';

    newsList.forEach((news, index) => {
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
            <button class="delete-btn" data-index="${index}">Șterge</button>
        `;

        newsListContainer.appendChild(newsDiv);
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            deleteNews(index);
        });
    });
}

function deleteNews(index) {
    const newsList = JSON.parse(localStorage.getItem('newsList')) || [];
    newsList.splice(index, 1);
    localStorage.setItem('newsList', JSON.stringify(newsList));
    loadNews();
}

window.addEventListener('load', loadNews);
















