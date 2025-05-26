// support/hooks.js
const { BeforeAll, AfterAll, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const playwright = require('playwright');

// Set default timeout for steps
setDefaultTimeout(60 * 1000); // 60 seconds

let browser;
let context;
let page;

BeforeAll(async function () {
  // Launch browser once before all scenarios
  browser = await playwright.chromium.launch({ headless: true }); // Or other browsers like firefox, webkit
});

AfterAll(async function () {
  // Close browser after all scenarios
  if (browser) {
    await browser.close();
  }
});

Before(async function () {
  // Create new context and page for each scenario
  context = await browser.newContext();
  page = await context.newPage();
  this.page = page; // Attach page to Cucumber's world object
  this.browser = browser;
  this.context = context;
});

After(async function () {
  // Close page and context after each scenario
  if (page) {
    await page.close();
  }
  if (context) {
    await context.close();
  }
});
