const express = require('express'); 
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
})

app.get('/profile', (req, res) => {
    res.render('profile');
})

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
})

app.get('/contact', (req, res) => {
    res.sendFile(`${publicPath}/contact.html`);
})

app.use((req, res) => {
    res.sendFile(`${publicPath}/nopage.html`);
})

app.listen(3000)
