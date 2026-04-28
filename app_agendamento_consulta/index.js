const express = require('express');
const mustacheExpress = require('mustache-express');
const mustache = require('mustache-express');
const PORT = 5555;
const app = express();

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('index');
});
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


