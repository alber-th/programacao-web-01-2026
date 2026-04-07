//matém a lista de produtos em memória
const produtos = [];

function cadastrarProduto(nome, preco) {
    const produto = { id: produtos.length + 1, nome, preco };
    produtos.push(produto);
    return produto;
}

function listarProdutos() {
    return produtos;
}

function atualizarProduto(id, nome, preco) {
    const produto = produtos.find(p => p.id === id);
    if (produto) {
        produto.nome = nome;
        produto.preco = preco;
        return produto;
    }
    return null;
}

module.exports = {
    cadastrarProduto,
    listarProdutos,
    atualizarProduto
};