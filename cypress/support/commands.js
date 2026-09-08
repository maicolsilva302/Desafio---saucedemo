Cypress.Commands.add('verificarProdutoNoCarrinho', (produto) => {
  cy.contains('.inventory_item', produto, { matchCase: false }).should('be.visible');
});
