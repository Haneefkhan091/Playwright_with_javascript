// @ts-check
const { test, expect, chromium } = require('@playwright/test');

test('has title', async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false }); // 'headless: false' to see the browser UI

  // Open a new page
  const page = await browser.newPage();

  // Navigate to the OrangeHRM demo login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Expect the title to contain "OrangeHRM"
  await expect(page).toHaveTitle(/OrangeHRM/);

  // Close the browser
  await browser.close();
});

test('login with valid credentials', async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false }); // 'headless: false' to see the browser UI

  // Open a new page
  const page = await browser.newPage();

  // Navigate to the OrangeHRM demo login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Fill in the username and password fields
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');

  // Click the login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Expect the dashboard to be visible after login
  await expect(page).toHaveURL(/dashboard/);

  // Close the browser
  await browser.close();
});
