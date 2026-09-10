#language: en
Feature: Login no Saucedemo

  Scenario: Realizar login com usuário válido
    Given que acesso a url "https://www.saucedemo.com/"
    And informo usuário "standard_user" e senha "secret_sauce"
    When clico no botão de login
    Then devo visualizar a página de produtos com sucesso

  Scenario: Realizar login com usuário inválido
    Given que acesso a url "https://www.saucedemo.com/"
    And informo usuário "standard_user" e senha "123456"
    When clico no botão de login
    Then devo visualizar a mensagem de erro "Username and password do not match any user in this service"

  Scenario: Realizar logout com sucesso
    Given que acesso a url "https://www.saucedemo.com/"
    And informo usuário "standard_user" e senha "secret_sauce"
    And clico no botão de login
    And devo visualizar a página de produtos com sucesso
    When acesso o menu lateral e clico em logout
    Then devo visualizar a página de login com sucesso