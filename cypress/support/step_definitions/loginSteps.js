const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const loginPage = require("../pageObjects/LoginPage");

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

Then("devo visualizar a mensagem de erro {string}", (message) => {
  loginPage.assertErrorMessage(message);
});

When("acesso o menu lateral e clico em logout", () => {
  loginPage.acessarMenuLateral();
  loginPage.clicarEmLogout();
});

Then("devo visualizar a página de login com sucesso", () => {
  cy.url().should('include', 'https://www.saucedemo.com/');
});


