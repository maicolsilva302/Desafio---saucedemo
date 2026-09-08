#language: en
Feature: Adicionar produtos ao carrinho de compras

  Scenario Outline: Adicionar produtos unitários ao carrinho de compras
    Given que acesso a url "https://www.saucedemo.com/"
    And informo usuário "standard_user" e senha "secret_sauce"
    And clico no botão de login
    When adiciono o produto "<produto>" ao carrinho de compras
    Then visualizo a contagem de produtos no carrinho

    Examples:
      | produto                           |
      | Sauce Labs Backpack               |
      | Sauce Labs Bike Light             |
      | Sauce Labs Bolt T-Shirt           |
      | Sauce Labs Fleece Jacket          |
      | Sauce Labs Onesie                 |
      | Test.allTheThings() T-Shirt (Red) |


  Scenario: Adicionar produtos em lote ao carrinho de compras
    Given que acesso a url "https://www.saucedemo.com/"
    And informo usuário "standard_user" e senha "secret_sauce"
    And clico no botão de login
    When adiciono os seguintes produtos ao carrinho:
      | Sauce Labs Backpack      |
      | Sauce Labs Bike Light    |
      | Sauce Labs Fleece Jacket |
    Then visualizo 3 itens no badge do carrinho