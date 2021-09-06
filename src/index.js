const puppeteer = require('puppeteer');

async function Buscar() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    'https://www.linkedin.com/login/pt?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin'
  );

  await page.evaluate(() => {});

  await page.screenshot({ path: 'screenShotInstagram.png' });

  await browser.close();
}

Buscar();
