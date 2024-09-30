const { test, expect } = require('@playwright/test');

test('Drag and Drop with Assertions and a', async ({ page }) => {
    // Navigate to the target page
    await page.goto('https://testautomationpractice.blogspot.com/');

   await page.locator("#input1").fill('For testing purpose')
   await page.keyboard.press('Control+A')
   await page.waitForTimeout(2000)
   await page.keyboard.press('Control+C')
   await page.locator("#input2").press('Control+V')
});
