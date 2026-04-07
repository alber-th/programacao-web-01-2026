const express = require('express');
const app = express();
const port = 5555;

app.listen(port, () => {
  console.log(`Server is RUNNING on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    let msg = "<h1>Rotas Disponíveis</h1>";
    msg += "<p> Para cadastrar um produto: <a href='/cadastrar'>/cadastrar</a></p>";
    msg += "<p> Para visualizar os produtos: <a href='/produtos'>/produtos</a></p>";
    msg += "<p> Para atualizar um produto: <a href='/atualizar'>/atualizar</a></p>";
    msg += "<p> Para excluir um produto: <a href='/excluir'>/excluir</a></p>";
    res.send(msg);
});

api.get('/cadastrar', (req, res) => {
    let nome = req.query.nome;
    let qtd = req.query.qtd;
    if (nome && qtd) {
        let produto = estoque.cadastrarProduto(nome, parseInt(qtd));
        res.send(`Produto cadastrado: ${produto.nome} - Quantidade: ${produto.qtd}`);
    } else {
        res.send("Por favor, forneça o nome e a quantidade do produto.");
    }
});

api.get('/produtos', (req, res) => {
    let produtos = estoque.listarProdutos();
    res.json(produtos);
});