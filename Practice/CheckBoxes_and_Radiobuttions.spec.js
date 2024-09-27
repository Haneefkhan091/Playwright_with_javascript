
// const { test, expect, chromium } = require('@playwright/test');
import { test,browser } from '@playwright/test';
test('radio buttons and checkboxes', async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false }); // 'headless: false' to see the browser UI

  // Open a new page
  const page = await browser.newPage();

  // Navigate to the practice page
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  // Select Radio Button 2
  await page.click('input[value="radio2"]');

  // Verify Radio Button 2 is selected
  const radio2Checked = await page.isChecked('input[value="radio2"]');
  console.log(`Radio 2 Selected: ${radio2Checked}`);

  // Select CheckBox Option 1
  await page.check('#checkBoxOption1');

  // Verify CheckBox Option 1 is checked
  const checkBox1Checked = await page.isChecked('#checkBoxOption1');
  console.log(`Checkbox Option 1 Selected: ${checkBox1Checked}`);

  // Select CheckBox Option 2
  await page.check('#checkBoxOption2');

  // Verify CheckBox Option 2 is checked
  const checkBox2Checked = await page.isChecked('#checkBoxOption2');
  console.log(`Checkbox Option 2 Selected: ${checkBox2Checked}`);

  // Select a value from the Dropdown
  await page.selectOption('#dropdown-class-example', { value: 'option2' });

  // Verify the dropdown value is selected
  // @ts-ignore
  const selectedOption = await page.$eval('#dropdown-class-example', el => el.value);
  console.log(`Dropdown Selected: ${selectedOption}`);

  // Fill Suggestion Input
  await page.fill('input#autocomplete', 'United States');

  // Verify the input is filled
  const inputValue = await page.inputValue('input#autocomplete');
  console.log(`Suggestion Input Filled: ${inputValue}`);
 await page.waitForTimeout(5000)
  // Close the browser
  await browser.close();
});
