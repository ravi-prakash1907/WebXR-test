const express = require('express');
const app = express();

app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index');
});


app.listen(8080, () => {
    console.log("Listening on http://localhost:8080");
    // console.log("Listening on http://0.0.0.0:8080");
});



