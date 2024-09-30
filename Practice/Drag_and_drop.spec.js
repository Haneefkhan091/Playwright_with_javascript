const { test, expect } = require('@playwright/test');

test('Drag and Drop with Assertions and a', async ({ page }) => {
    // Navigate to the target page
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Locate the draggable and droppable elements
    const draggable = await page.locator("#draggable");
    const droppable = await page.locator("#droppable");

    // Perform the drag and drop action
    await draggable.dragTo(droppable);

    // Assert that the text of the droppable has changed to "Dropped!"
    await expect(droppable).toHaveText('Dropped!');

    // Assert that the background color of the droppable has changed (assuming it changes to yellow)
    const backgroundColor = await droppable.evaluate((el) => {
        return window.getComputedStyle(el).backgroundColor;
    });

    // Assert that the background color is yellow (RGB value for yellow: "rgb(255, 2500, )")
    expect(backgroundColor).toBe('rgb(255, 250, 144)');
    
    console.log("Drag and drop action completed and verified.");
});
