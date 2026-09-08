class CarrinhoPage {
    elements = {
        listaDeProdutosNoCarrinho: () => cy.get('[data-test="cart-list"]'),
        btnCheckout: () => cy.get('[data-test="checkout"]'),
        btnContinue: () => cy.get('[data-test="continue"]'),
        btnFinish: () => cy.get('[data-test="finish"]'),
        mensagemDeConfirmacaoDeCompra: () => cy.get('.complete-header'),
        btnPDF: () => cy.get('[data-test="generate-pdf-order"]'),
    };

    visualizarProdutosAdicionadosNoCarrinho() {
        this.elements.listaDeProdutosNoCarrinho().should('be.visible');
    }

    removerProdutoDoCarrinho(produto) {
        cy.contains('.cart_item', produto, { matchCase: false })
            .find('button', 'Remove')
            .click();
    }

    clicarNoBotaoCheckout() {
        this.elements.btnCheckout({ timeout: 10000 }).scrollIntoView().click();
    }

    clicarNoBotaoContinue() {
        this.elements.btnContinue({ timeout: 10000 }).scrollIntoView().click();
    }

    finalizarCompra() {
        this.elements.btnFinish({ timeout: 10000 }).scrollIntoView().click();
    }

    visualizarMensagemDeConfirmacaoDeCompra(mensagem) {
        this.elements.mensagemDeConfirmacaoDeCompra({ timeout: 10000 }).should('contain', mensagem).and('be.visible');
    }

    validarDownloadDoArquivoPDFComSucesso() {
        this.elements.btnPDF().click();

        cy.task('downloads', 'cypress/downloads').then((files) => {
            expect(files.length).to.be.greaterThan(0);
        });
    }
}

module.exports = new CarrinhoPage();