import { chromium, test } from '@playwright/test';

test('optimized script', async () => {
  test.setTimeout(60000); // Increase the test timeout

  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Go to the page and wait until it's fully loaded
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/', { waitUntil: 'networkidle' });

  // Wait for the radio button to be visible before interacting
  const radio = page.locator('input[value="radio3"]');
  await radio.waitFor();  // Wait for the element to be ready
  await radio.check();

  // Fill the Suggestion Input with 'Pakistan' and select from the autocomplete
  const countryInput = page.locator('input#autocomplete');
  await countryInput.fill('Pakistan');
  await page.keyboard.press('Enter'); // Press Enter after filling input

  // Check and uncheck the checkboxes
  const checkboxes = ['#checkBoxOption1', '#checkBoxOption2', '#checkBoxOption3'];
  for (const checkbox of checkboxes) {
    const element = page.locator(checkbox);
    await element.check();
    await element.uncheck();
  }

  // Fill the name and trigger the alert
  await page.locator('input[name="enter-name"]').fill('haneef');
  page.once('dialog', dialog => {
    console.log(`Alert Dialog message: ${dialog.message()}`);
    dialog.accept();
  });

  await page.getByRole('button', { name: 'Alert' }).click();

  await page.waitForTimeout(2000);

  await browser.close();
});
