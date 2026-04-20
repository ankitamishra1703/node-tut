const express = require('express');
const reqFilter = require('./middleware');
const app = express();
const route = express.Router();

// app.use(reqFilter);

route.use(reqFilter);

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/about', (req, res) => {
    res.send('About Page');
})

route.get('/contact', (req, res) => {
    res.send('Contact Page');
})

app.use('/', route);

app.listen(3000);
