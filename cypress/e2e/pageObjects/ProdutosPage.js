class ProdutosPage {
    elements = {
        quantidadeDeProdutosNoCarrinho: () => cy.get('.shopping_cart_badge'),
        carrinhoDeCompras: () => cy.get('.shopping_cart_link'),
    };

    adicionarProdutoAoCarrinho(produto) {
        cy.contains('.inventory_item', produto, { matchCase: false })
            .find('button')
            .click();
    }

    validarContagemUnitariaDeProdutosNoCarrinho(quantidade = '1') {
        this.elements.quantidadeDeProdutosNoCarrinho().should('have.text', String(quantidade));
    }

    adicionarProdutosEmLote(produtos) {
        const listaProdutos = Array.isArray(produtos) ? produtos : [produtos];

        listaProdutos.forEach((produto) => {
            cy.contains('.inventory_item', produto, { matchCase: false })
                .find('button')
                .click();
        });
    }

validarQuantidadeNoCarrinho(quantidadeEsperada) {
  this.elements.quantidadeDeProdutosNoCarrinho()
    .scrollIntoView()
    .should('be.visible')
    .and('have.text', String(quantidadeEsperada));
}
}

module.exports = new ProdutosPage();