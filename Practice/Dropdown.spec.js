import { expect, test } from '@playwright/test';

test('Dropdown Test', async ({ page }) => {
  
  // Navigate to the URL
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  // Click on the dropdown
  const dropdown = page.locator('#dropdown-class-example');
  await dropdown.click();
  const optionsCount = await dropdown.locator('option').count();
  console.log(`The dropdown contains ${optionsCount} options.`);


  // Print each option's text
for (let i = 0; i < optionsCount; i++) {
    const optionText = await dropdown.locator('option').nth(i).innerText();
    console.log(`Option ${i + 1}: ${optionText}`);
}
  // Verify that the dropdown contains the expected text options
  await expect(dropdown).toContainText('Select Option1 Option2 Option3');

  
});
