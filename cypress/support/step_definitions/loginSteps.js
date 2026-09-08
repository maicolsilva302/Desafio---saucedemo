const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const loginPage = require("../../e2e/pageObjects/LoginPage");

Given("que acesso a url {string}", (url) => {
  loginPage.acessarUrl(url);
});

When("informo usuário {string} e senha {string}", (username, password) => {
  loginPage.informarUsuarioESenha(username, password);
});

When("clico no botão de login", () => {
  loginPage.clicarNoBotaoLogin();
});

Then("devo visualizar a página de produtos com sucesso", () => {
  loginPage.validarExibicaoDaPaginaDeProdutosComSucesso();
});
