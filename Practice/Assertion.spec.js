const { test, expect, chromium } = require('@playwright/test');

test("Soft assertions", async () => {

  // Launch the browser in headed mode (UI mode)
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://www.demoblaze.com/index.html");

  // Hard assertions
  await expect(page).toHaveTitle('STORE');  // Adjust the title if necessary
  await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
  await expect(page.locator('.navbar-brand')).toBeVisible();

  // Close the browser after execution
  await browser.close();
});
