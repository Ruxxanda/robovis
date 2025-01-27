const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Configurare transport Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // Sau alt serviciu SMTP
    auth: {
        user: 'ruxanda.cujba07@gmail.com', // Înlocuiește cu emailul tău
        pass: 'ruxanda.16' // Folosește o parolă de aplicație pentru securitate
    }
});

// Endpoint pentru trimiterea emailului
app.post('/send-email', (req, res) => {
    const { title, content, imageUrls, date, recipients } = req.body;

    // Construcția conținutului emailului
    const htmlContent = `
        <h1>${title || 'Fără titlu'}</h1>
        <p>${content || 'Fără conținut'}</p>
        ${imageUrls.length > 0 ? imageUrls.map(url => `<img src="${url}" alt="Imagine" style="max-width: 100%;"><br>`).join('') : ''}
        <p><strong>Data:</strong> ${date || 'Data necunoscută'}</p>
    `;

    const mailOptions = {
        from: 'ruxanda.cujba07@gmail.com',
        to: recipients.join(','), // Lista destinatarilor
        subject: `Noutate: ${title || 'Fără titlu'}`,
        html: htmlContent
    };

    // Trimiterea emailului
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Eroare la trimiterea emailului:', error);
            return res.status(500).send('Eroare la trimiterea emailului.');
        }
        console.log('Email trimis:', info.response);
        res.status(200).send('Email trimis cu succes!');
    });
});

// Pornirea serverului
app.listen(3000, () => {
    console.log('Serverul rulează pe http://localhost:3000');
});
