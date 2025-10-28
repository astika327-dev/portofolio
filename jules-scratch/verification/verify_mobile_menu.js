const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Emulate a mobile device
  await page.setViewportSize({ width: 375, height: 667 });

  await page.goto('http://localhost:3000');

  // Take a screenshot of the initial mobile view
  await page.screenshot({ path: 'jules-scratch/verification/mobile_view.png' });

  // Click the hamburger menu button
  await page.click('button');

  // Take a screenshot of the open menu
  await page.screenshot({ path: 'jules-scratch/verification/mobile_menu_open.png' });

  await browser.close();
})();
