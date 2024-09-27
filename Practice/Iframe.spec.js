import { chromium, test } from '@playwright/test';

test('print iframes and frames', async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to the given URL
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/', { waitUntil: 'networkidle' });

  // Get all the frames on the page
  const frames = page.frames();

  // Print the number of frames found
  console.log(`Total number of frames: ${frames.length}`);

  // Loop through each frame and print its URL or name (if available)
  for (const frame of frames) {
    console.log(`Frame name: ${frame.name()}`);
    console.log(`Frame URL: ${frame.url()}`);
  }

  // Close the browser
  await browser.close();
});
