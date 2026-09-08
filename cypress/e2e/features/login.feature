#language: en
Feature: Login no Saucedemo

  Scenario: Realizar login com usuário válido
    Given que acesso a url "https://www.saucedemo.com/"
    And informo usuário "standard_user" e senha "secret_sauce"
    When clico no botão de login
    Then devo visualizar a página de produtos com sucesso
