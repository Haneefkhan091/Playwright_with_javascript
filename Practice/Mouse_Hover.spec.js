import { expect, test } from '@playwright/test';

test('Mouse Hover Example and Verify Dropdown Options', async ({ page }) => {
  // Navigate to the target website
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  // Perform mouse hover over the #mousehover element
  await page.locator('#mousehover').hover();

  // Assert that the "Top" option is visible after hovering
  const topOption = await page.locator('text=Top');
  await expect(topOption).toBeVisible();

  // Assert that the "Reload" option is visible after hovering
  const reloadOption = await page.locator('text=Reload');
  await expect(reloadOption).toBeVisible();

  // Optionally, you can also click on one of the options if required
  // await topOption.click();
  // await reloadOption.click();

  // Additional checks can be done here if necessary
});
