const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl:"https://www.saucedemo.com",
    viewportWidth: 1500,
    viewportHeight: 850,
    defaultCommandTimeout: 10000,
  },
});
