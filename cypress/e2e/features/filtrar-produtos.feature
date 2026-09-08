#language: en
Feature: Filtrar produtos por preço e nome

 Scenario Outline: filtrar por menor preço
    Given que acesso a url "https://www.saucedemo.com/"
    And informo usuário "standard_user" e senha "secret_sauce"
    And clico no botão de login
    When seleciono o filtro "Price (low to high)"
    Then visualizo os produtos filtrados por preço do menor para o maior
    
    Scenario Outline: filtrar por Maior preço
    Given que acesso a url "https://www.saucedemo.com/"
    And informo usuário "standard_user" e senha "secret_sauce"
    And clico no botão de login
    When seleciono o filtro "Price (high to low)"
    Then visualizo os produtos filtrados por preço do maior para o menor
    