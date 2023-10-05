const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "efy25b",
  e2e: {
    supportFile: false,
    baseUrl: "http://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
