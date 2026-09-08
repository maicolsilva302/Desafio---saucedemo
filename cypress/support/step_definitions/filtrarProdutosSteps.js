const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const filtrarProdutosPage = require("../../e2e/pageObjects/FiltrarProdutosPage");

When("seleciono o filtro {string}", (filtro) => {
  filtrarProdutosPage.selecionarFiltro(filtro);
});

Then("visualizo os produtos filtrados por preço do menor para o maior", () => {
  filtrarProdutosPage.visualizarProdutosFiltrados();
});

Then("visualizo os produtos filtrados por preço do maior para o menor", () => {
  filtrarProdutosPage.visualizarProdutosFiltrados();
});
