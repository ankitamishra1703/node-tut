const express = require('express'); 
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
})

app.get('/profile', (req, res) => {
    const user = {  
        name: 'Ankita',
        email: 'ank@gmail.com',
        city: 'Delhi',
        skills: ['HTML', 'CSS', 'JavaScript','python']
    };
    res.render('profile', { user });
})

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
})

app.get('/contact', (req, res) => {
    res.sendFile(`${publicPath}/contact.html`);
})

app.get('/login', (req, res) => {
    res.render('login');
});

app.use((req, res) => {
    res.sendFile(`${publicPath}/nopage.html`);
})



app.listen(3000)
