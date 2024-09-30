const { test, expect } = require('@playwright/test');

test('Single File Upload', async ({ page }) => {
  // Navigate to the file upload demo page
  await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

  // Set the input file
  const filePath = 'D:/Playwright_with_Javascript/FileUpload/Profile.pdf';
  
  // Wait for the file upload input element to be available and set the file
  await page.setInputFiles('input#filesToUpload', filePath);

  // Optionally wait for any upload status if needed or further actions
  await page.waitForTimeout(5000); // Wait for 5 seconds to observe the upload process
});
