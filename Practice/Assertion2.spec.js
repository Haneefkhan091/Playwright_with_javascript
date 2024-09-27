const { test, chromium, expect } = require('@playwright/test');

test("handle inputbox", async () => {
  // Launch browser in headed mode (UI mode)
  const browser = await chromium.launch({ headless: false }); // Headed mode
  const page = await browser.newPage();

  // Navigate to the target page
  await page.goto("https://itera-qa.azurewebsites.net/home/automation");

  // Inputbox - firstname validations
  const inputBox = page.locator("//input[@id='name']");

  // Perform checks (assertions) for visibility, emptiness, editability, and enabled state
  await expect(inputBox).toBeVisible();
  await expect(inputBox).toBeEmpty();
  await expect(inputBox).toBeEditable();
  await expect(inputBox).toBeEnabled();

  // Fill the input box with a name
  await inputBox.fill('John');

  // Wait for 2 seconds to observe the changes before closing the browser
  await page.waitForTimeout(2000); // Shortened the wait for better optimization

  // Close the browser
  await browser.close();
});
