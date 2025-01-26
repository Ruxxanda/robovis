const scriptURL = 'https://script.google.com/macros/s/AKfycby9H3lswi8n6giZwz66s5zdnsQq5tPkoSjldZjGGN-5bOaMWWUxpTMnf2vvgJhEDmJk/exec';
const form = document.forms['contact-form'];
const button = document.getElementById('submit');

form.addEventListener('submit', e => {
    e.preventDefault();

    button.classList.add('sent');
    button.value = 'Trimis';
    button.disabled = true;

    // Schimbă culoarea butonului și bordura în verde
    button.style.backgroundColor = 'green';
    button.style.borderColor = 'green';

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // Schimbă textul butonului la "Trimis"
            button.value = 'Trimis';
            button.disabled = true;

            // Revină textul, culoarea butonului și bordura la "Trimite" după 10 secunde
            setTimeout(function() {
                button.classList.remove('sent');
                button.value = 'Trimite';
                button.disabled = false;
                button.style.backgroundColor = ''; // Resetează culoarea butonului
                button.style.borderColor = ''; // Resetează culoarea bordurii
            }, 10000);
        })
        .catch(error => console.error('Eroare!', error.message));

    // Resetează formularul
    form.reset();
});

// Eveniment pentru trimiterea formularului și când se apasă Enter
form.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        form.dispatchEvent(new Event('submit', { 'bubbles': true }));
    }
});
