const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const produtosPage = require("../pageObjects/ProdutosPage");

When("adiciono o produto {string} ao carrinho de compras", (produto) => {
  produtosPage.adicionarProdutoAoCarrinho(produto);
});

Then("visualizo a contagem de produtos no carrinho", () => {
  produtosPage.validarContagemUnitariaDeProdutosNoCarrinho();
});

When("adiciono os seguintes produtos ao carrinho:", (dataTable) => {
  const produtos = dataTable.raw().flat();
  produtosPage.adicionarProdutosEmLote(produtos);
});

Then("visualizo {int} itens no badge do carrinho", (quantidade) => {
  produtosPage.validarQuantidadeNoCarrinho(quantidade);
});
