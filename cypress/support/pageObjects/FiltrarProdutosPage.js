class FiltrarProdutosPage {
    elements = {
        selectFiltros: () => cy.get('[data-test="product-sort-container"]'),
        filtroPreco: () => cy.get('[data-test="product_sort_container"]'),
        produtos: () => cy.get('.inventory_item'),
    };

    selecionarFiltro(filtro) {
        this.elements.selectFiltros().select(filtro);
    }

    visualizarProdutosFiltrados() {
        this.elements.produtos().should('be.visible');
    }
}

module.exports = new FiltrarProdutosPage();
  