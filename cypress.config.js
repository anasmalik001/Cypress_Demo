const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  viewportHeight: 660,
  viewportWidth: 1000,
  videoCompression: false,
  video: false,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    charts: true,
    inlineAssets: true,
    embeddedScreenshots: true,
    reportPageTitle: "My Test Suite",
    html: true,
    json: false,
    timestamp: "mmddyyyy",
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these. 

    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);

    },
  },
});
