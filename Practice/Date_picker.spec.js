import { expect, test } from '@playwright/test';

test.describe('Date Picker Tests', () => {
  // Scenario 1: Select a specific date and verify the input field
  test('Select date 1st September 2024 and verify', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    // Click the date picker and select September 1, 2024
    await page.locator('#datepicker').click();
    
    // Navigate to September 2024 (loop through until the year and month are correct)
    while (await page.locator('span.ui-datepicker-year').textContent() !== '2024' || 
           await page.locator('span.ui-datepicker-month').textContent() !== 'September') {
      await page.click('a.ui-datepicker-next'); // Navigate to the next month
    }
    
    // Select the 1st day of September 2024
    await page.locator('#ui-datepicker-div').getByRole('link', { name: '1', exact: true }).click();
    
    // Verify the input field has the correct value
    const selectedDate = await page.locator('#datepicker').inputValue();
    expect(selectedDate).toBe('09/01/2024');

    // Debugging step: Log the actual content of the locator to verify what's being displayed
    const actualContent = await page.locator('#post-body-1307673142697428135').innerText();
    console.log('Actual content inside the locator:', actualContent);

    
  });

  // Scenario 2: Select a different date (15th October 2025) and verify
  test('Select date 15th October 2025 and verify', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    // Click the date picker and navigate to October 2025
    await page.locator('#datepicker').click();
    
    while (await page.locator('span.ui-datepicker-year').textContent() !== '2025' || 
           await page.locator('span.ui-datepicker-month').textContent() !== 'October') {
      await page.click('a.ui-datepicker-next'); // Navigate to the next month
    }

    // Select the 15th of October 2025
    await page.locator('#ui-datepicker-div').getByRole('link', { name: '15', exact: true }).click();

    // Verify the input field has the correct value
    const selectedDate = await page.locator('#datepicker').inputValue();
    expect(selectedDate).toBe('10/15/2025');

    // Debugging step: Log the actual content of the locator
    const actualContent = await page.locator('#post-body-1307673142697428135').innerText();
    console.log('Actual content inside the locator:', actualContent);

   
  });

});