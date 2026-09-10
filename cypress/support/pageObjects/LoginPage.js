class LoginPage {
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    btnLogin: () => cy.get('[data-test="login-button"]'),
    mensagemDeErro: () => cy.get('[data-test="error"]'),
    tituloDoProduto: () => cy.get('.title'),
    menuLateral: () => cy.get('#react-burger-menu-btn'),
    btnLogout: () => cy.get('[data-test="logout-sidebar-link"]'),
  };

  acessarUrl(url) {
    cy.visit(url);
  }

  informarUsuarioESenha(username, password) {
    this.elements.usernameInput({timeout: 10000}).clear().type(username).should('have.value', username);
    this.elements.passwordInput({timeout: 10000}).clear().type(password).should('have.value', password);
  }

  clicarNoBotaoLogin() {
    this.elements.btnLogin().click();
  }

  login(username, password) {
    this.informarUsuarioESenha(username, password);
    this.clicarNoBotaoLogin();
  }

  validarExibicaoDaPaginaDeProdutosComSucesso() {
    this.elements.tituloDoProduto().should('contain', 'Products');
  }

  assertErrorMessage(message) {
    this.elements.mensagemDeErro().should('contain', message).and('be.visible');
  }

  acessarMenuLateral() {
    this.elements.menuLateral({timeout: 10000}).click();
  }

  clicarEmLogout() {
    this.elements.btnLogout().click();
    this.elements.usernameInput().should('be.visible');
  }

}

module.exports = new LoginPage();