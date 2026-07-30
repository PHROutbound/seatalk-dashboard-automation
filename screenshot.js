import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage({
    viewport: { width: 1440, height: 2200 }
  });

  await page.goto(
    'https://datastudio.google.com/reporting/ceb1256b-e485-4df7-9ed2-1e2f1c4396f6/page/p_2tgzdeutmd',
    { waitUntil: 'networkidle', timeout: 120000 }
  );

  await page.screenshot({
    path: 'dashboard.png',
    fullPage: true
  });

  await browser.close();
})();
