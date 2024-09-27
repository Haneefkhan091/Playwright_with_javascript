import { expect, test } from '@playwright/test';

test('handle multi-select dropdown on LambdaTest demo site', async ({ page }) => {
  // Navigate to the LambdaTest demo site with a multi-select dropdown
  await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo'); 
  
  // Locate the multi-select dropdown
  const multiSelectDropdown = page.locator('#multi-select'); // The multi-select dropdown on this site

  // Optionally, ensure the dropdown is visible
  await multiSelectDropdown.waitFor();

  // Select multiple options by value (for example: New York, Texas, and Florida)
  await multiSelectDropdown.selectOption(['New York', 'Texas', 'Florida']); 
  
  // Verify that the correct options are selected
  const selectedOptions = await multiSelectDropdown.evaluate((select) => {
    return Array.from(select.selectedOptions).map(option => option.value);
  });
  console.log('Selected options:', selectedOptions);
  
  // Sort both arrays before comparison to avoid order mismatch
  expect(selectedOptions.sort()).toEqual(['New York', 'Texas', 'Florida'].sort());
await page.waitForTimeout(3000)
  // Optionally, you can de-select all options
  await multiSelectDropdown.selectOption([]); // Deselect all options
});
