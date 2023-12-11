const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/data', async (req, res) => {
    try {
        const response = await fetch('http://localhost:8080/');
        // const response = await fetch('http://0.0.0.0:8080/data');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.listen(8080, () => {
    console.log("Listening on http://localhost:8080");
    // console.log("Listening on http://0.0.0.0:8080");
});



