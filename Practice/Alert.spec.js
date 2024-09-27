import { chromium, test } from '@playwright/test';

test('optimized script', async () => {
  test.setTimeout(60000); // Increase the test timeout

  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Go to the page and wait until it's fully loaded
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/', { waitUntil: 'networkidle' });

  await page.waitForTimeout(1000);
  // Fill the name and trigger the alert
  await page.locator('input[name="enter-name"]').fill('haneef');
  page.once('dialog', dialog => {
    console.log(`Alert Dialog message: ${dialog.message()}`);
page.waitForTimeout(2000)
    dialog.accept();
  });

  await page.getByRole('button', { name: 'Alert' }).click();

  await page.waitForTimeout(2000);

  await browser.close();
});
