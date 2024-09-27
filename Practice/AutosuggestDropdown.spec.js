import { expect, test } from '@playwright/test';

test('test dynamic search suggestions and click Pakistan', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  
  // Click on the autocomplete input field
  const autocompleteInput = page.locator('#autocomplete');
  await autocompleteInput.click();
  
  // Fill in the input field with 'Pa' to trigger the suggestions
  await autocompleteInput.fill('Pa');
  
  // Wait for suggestions to appear
  const suggestions = page.locator('.ui-menu-item'); // Adjust this selector if needed
  
  // Ensure that the suggestions are visible
  await suggestions.first().waitFor();
  
  // Get the count of available suggestions
  const suggestionCount = await suggestions.count();
  console.log(`There are ${suggestionCount} suggestions available:`);
  
  // Loop through the suggestions to find the one that contains the text 'Pakistan'
  for (let i = 0; i < suggestionCount; i++) {
    const suggestionText = await suggestions.nth(i).innerText();
    console.log(`Suggestion ${i + 1}: ${suggestionText}`);
    
    // If the suggestion text contains 'Pakistan', click on it
    if (suggestionText.includes('Pakistan')) {
      await suggestions.nth(i).click();
      console.log('Clicked on Pakistan');
      break; // Exit the loop once 'Pakistan' is clicked
    }
  }

  // Optionally, you can verify that the autocomplete input now contains 'Pakistan'
  const selectedValue = await autocompleteInput.inputValue();
  console.log(`Selected value: ${selectedValue}`);
  expect(selectedValue).toBe('Pakistan');
});
