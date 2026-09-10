const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const carrinhoPage = require("../pageObjects/CarrinhoPage");
const produtosPage = require("../pageObjects/ProdutosPage");

When("acesso o carrinho de compras", () => {
  produtosPage.elements.carrinhoDeCompras().click();
});

Then("visualizo os produtos adicionados no carrinho", () => {
  carrinhoPage.visualizarProdutosAdicionadosNoCarrinho();
});

When("removo o produto {string} do carrinho", (produto) => {
  carrinhoPage.removerProdutoDoCarrinho(produto);
});

When("clico no botão checkout", () => {
  carrinhoPage.clicarNoBotaoCheckout();
});

When("preencho os campos obrigatórios do checkout com nome {string}, sobrenome {string} e código postal {string}", (nome, sobrenome, codigoPostal) => {
  carrinhoPage.preencherCamposObrigatoriosCheckout(nome, sobrenome, codigoPostal);
});

When("clico no botão continue", () => {
  carrinhoPage.clicarNoBotaoContinue();
});

When("finalizo a compra clicando no botão finish", () => {
  carrinhoPage.finalizarCompra();
});

Then("visualizo a mensagem de confirmação da compra {string}", (mensagem) => {
  carrinhoPage.visualizarMensagemDeConfirmacaoDeCompra(mensagem);
});

When("valido o download do arquivo PDF com sucesso", () => {
  carrinhoPage.validarDownloadDoArquivoPDFComSucesso();
});
