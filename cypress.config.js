const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "dii63j",

  //project config
  video: false,
  screenshotOnRunFailure: true,
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
