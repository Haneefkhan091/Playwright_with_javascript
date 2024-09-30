const { test, expect } = require('@playwright/test');

// Function to validate the data for each row
async function validateTableRows(rows, expectedData) {
    const rowCount = await rows.count();

    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        const id = await rows.nth(rowIndex).locator('td:nth-child(1)').textContent();
        const name = await rows.nth(rowIndex).locator('td:nth-child(2)').textContent();
        const price = await rows.nth(rowIndex).locator('td:nth-child(3)').textContent();

        // Assert that the data matches the expected values
        expect(id.trim()).toBe(expectedData[rowIndex].id);
        expect(name.trim()).toBe(expectedData[rowIndex].name);
        expect(price.trim()).toBe(expectedData[rowIndex].price);

        // Ensure that the row is visible (not hidden behind pagination issues)
        await expect(rows.nth(rowIndex)).toBeVisible();

        console.log(`Row ${rowIndex + 1} - ID: ${id.trim()}, Name: ${name.trim()}, Price: ${price.trim()} validated.`);
    }
}

test('Handling Pagination Table with Assertions and Visibility Check', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const expectedData = [
        // Data for page 1
        [
            { id: '1', name: 'Smartphone', price: '$10.99' },
            { id: '2', name: 'Laptop', price: '$19.99' },
            { id: '3', name: 'Tablet', price: '$5.99' },
            { id: '4', name: 'Smartwatch', price: '$7.99' },
            { id: '5', name: 'Wireless Earbuds', price: '$8.99' }
        ],
      
    ];

    for (let pageNum = 1; pageNum <= 4; pageNum++) {
        // Click on the pagination button and wait for the table to load properly
        await page.click(`xpath=//a[text()='${pageNum}']`);
        
        // Wait for the table rows to be visible after the page change
        await page.waitForSelector('table#productTable tbody tr', { state: 'visible' });

        const rows = await page.locator('table#productTable tbody tr');
        console.log(`Validating page ${pageNum}...`);

        // Ensure at least one row is visible (if table reload works correctly)
        await expect(rows.first()).toBeVisible();
   
   if (expectedData[pageNum - 1]) {
            await validateTableRows(rows, expectedData[pageNum - 1]);
        } else {
            console.log(`No expected data available for page ${pageNum}, skipping assertions.`);
        }
    }
});
