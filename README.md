# Cypress + Cucumber + Page Object - Saucedemo

Este projeto foi estruturado para executar automações em Cypress com suporte a Cucumber e Page Object, acessando a URL do Saucedemo (`https://www.saucedemo.com`).

## Estrutura do projeto

- `cypress/e2e/features/`: arquivos `.feature` com cenários em Gherkin
- `cypress/e2e/step_definitions/`: passos de automação em JavaScript
- `cypress/support/pageObjects/`: classes e métodos de Page Object
- `cypress.config.js`: configuração principal do Cypress e do Cucumber

## Pré-requisitos

- Node.js 18+ recomendado
- npm

## Setup

1. Abra o terminal na raiz do projeto.
2. Execute:

```bash
npm install
```

3. Para abrir a interface do Cypress:

```bash
npm run cy:open
```

4. Para executar em modo headless:

```bash
npm run cy:run
```

5. Para executar apenas os cenários em Gherkin:

```bash
npm run test
```

## Evidências

- Screenshots em falhas: habilitados via `screenshotOnRunFailure: true`
- Vídeos em falhas: habilitados via `video: true`
- Os artefatos ficam em:
  - `cypress/screenshots/`
  - `cypress/videos/`

## Cenário incluído

- Login com usuário válido

## Observações

- A execução padrão já está configurada para rodar em modo headless.
- A URL base do projeto já está apontada para o Saucedemo.
