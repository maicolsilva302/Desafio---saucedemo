#language: en
Feature: Validar Produtos adicionados ao carrinho de compras

Scenario: Validar Produtos adicionados ao carrinho de compras
    Given que acesso a url "https://www.saucedemo.com/"
    And informo usuário "standard_user" e senha "secret_sauce"
    And clico no botão de login
    And adiciono os seguintes produtos ao carrinho:
      | Sauce Labs Backpack      |
      | Sauce Labs Bike Light    |
      | Sauce Labs Fleece Jacket |
    And visualizo 3 itens no badge do carrinho
    When acesso o carrinho de compras
    Then visualizo os produtos adicionados no carrinho

    Scenario: Remover produto do carrinho de compras
    Given que acesso a url "https://www.saucedemo.com/"
    And informo usuário "standard_user" e senha "secret_sauce"
    And clico no botão de login
    And adiciono os seguintes produtos ao carrinho:
      | Sauce Labs Backpack      |
      | Sauce Labs Bike Light    |
      | Sauce Labs Fleece Jacket |
    And visualizo 3 itens no badge do carrinho
    And acesso o carrinho de compras
    And visualizo os produtos adicionados no carrinho
    When removo o produto "Sauce Labs Bike Light" do carrinho
    Then visualizo 2 itens no badge do carrinho

    Scenario: Efetuar compra "em lote" com sucesso
    Given que acesso a url "https://www.saucedemo.com/"
    And informo usuário "standard_user" e senha "secret_sauce"
    And clico no botão de login
    And adiciono os seguintes produtos ao carrinho:
      | Sauce Labs Backpack      |
      | Sauce Labs Bike Light    |
      | Sauce Labs Fleece Jacket |
    And visualizo 3 itens no badge do carrinho
    And acesso o carrinho de compras
    And clico no botão checkout
    And preencho os campos obrigatórios do checkout com nome "Automação", sobrenome "Web" e código postal "07786723"
    And clico no botão continue
    When finalizo a compra clicando no botão finish
    Then visualizo a mensagem de confirmação da compra "Thank you for your order!"
 
 Scenario Outline: Efetuar compra "unitária" com sucesso
    Given que acesso a url "https://www.saucedemo.com/"
    And informo usuário "standard_user" e senha "secret_sauce"
    And clico no botão de login
    And adiciono o produto "Sauce Labs Backpack" ao carrinho de compras
    And acesso o carrinho de compras
    And clico no botão checkout
    And preencho os campos obrigatórios do checkout com nome "Automação", sobrenome "Web" e código postal "07786723"
    And clico no botão continue
    When finalizo a compra clicando no botão finish
    Then visualizo a mensagem de confirmação da compra "Thank you for your order!"
 
