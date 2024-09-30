import { chromium, test } from '@playwright/test';

test('handle iframe, scroll, and click on Job Support', async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to the given URL
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/', { waitUntil: 'networkidle' });

  // Wait for the iframe to load using XPath and access it
  const iframeHandle = await page.$('//iframe[@id="courses-iframe"]'); // Locate the iframe using XPath
  const iframe = await iframeHandle.contentFrame(); // Get the content frame of the iframe

  // Check if the iframe was found
  if (iframe) {
    // Scroll within the iframe
    await iframe.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight); // Scrolls to the bottom of the iframe
    });

    // Wait for the "Job Support" link to be visible in the iframe and click it
    const jobSupportLink = await iframe.getByRole('link', { name: 'Job Support' }) // Selector for "Job Support"
    await jobSupportLink.click();
    await jobSupportLink.scrollIntoViewIfNeeded()
    await page.waitForTimeout(5000)
  } else {
    console.error('Iframe not found');
  }

  // Close the browser
  await browser.close();
});
