const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 375, height: 667 } // iPhone 8
  });

  const pages = ['/', '/about', '/contact', '/skills', '/work'];

  for (const p of pages) {
    await page.goto(`http://localhost:3000${p}`);
    await page.screenshot({ path: `jules-scratch/verification/responsive-${p.replace('/', '') || 'home'}.png` });
  }

  await browser.close();
})();
