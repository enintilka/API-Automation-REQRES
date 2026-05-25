require('dotenv').config()
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  

  env: {

    reqresBaseUrl: process.env.reqres_base_url,
    reqresApiKey: process.env.reqres_api_key

  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
