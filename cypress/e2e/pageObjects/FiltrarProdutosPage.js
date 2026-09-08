class FiltrarProdutosPage {
    elements = {
        selectFiltros: () => cy.get('[data-test="product-sort-container"]'),
        filtroPreco: () => cy.get('[data-test="product_sort_container"]'),
        produtos: () => cy.get('.inventory_item'),
    };

    selecionarFiltro(filtro) {
        cy.wait(1500)
        this.elements.selectFiltros().select(filtro);
        //cy.contains(filtro).click();
    }

    visualizarProdutosFiltrados() {
        this.elements.produtos().should('be.visible');
    }
}

module.exports = new FiltrarProdutosPage();
  