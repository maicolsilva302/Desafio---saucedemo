const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const fs = require("fs");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: ["cypress/e2e/**/*.feature", "cypress/e2e/**/*.cy.{js,ts}"],
    stepDefinitions: ["cypress/support/step_definitions/**/*.js"],
    async setupNodeEvents(on, config) {
      // 1. Configura o Preprocessador do Cucumber
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", browserify.default(config));

      // 2. Declara a Task 'downloads' para validar arquivos na pasta
      on("task", {
        downloads(folderPath) {
          if (fs.existsSync(folderPath)) {
            return fs.readdirSync(folderPath);
          }
          return [];
        },
      });

      return config;
    },
    video: true,
    videoCompression: 32,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    chromeWebSecurity: false,
  },
  reporter: "spec",
});