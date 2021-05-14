const express = require('express');
const ejs = require('ejs');


const app = express();
const PORT = 3331;


app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    res.send('Welcome');

});

app.get('/contact', (req, res) => {

    res.render('contact');

});


// start server
app.listen( PORT, () => {
    console.log(`App is running on http://localhost:${PORT} \n\nHit CTRL + C to stop the server`);
})