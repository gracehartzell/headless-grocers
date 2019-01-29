const puppeteer = require('puppeteer');
const CREDS = require('./creds');

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto('https://www.instacart.com/store/h-e-b/storefront');

  const LOGIN_SELECTOR = '#nvrl-login > a';
  const EMAIL_SELECTOR = '#login_with_password_form_email';
  const PASSWORD_SELECTOR = '#login_with_password_form_password';
  const BUTTON_SELECTOR =
    '#signup-widget > div > div > div > div:nth-child(3) > form > div > button';

  await page.click(LOGIN_SELECTOR);
  await page.waitForNavigation();

  await page.click(EMAIL_SELECTOR);
  await page.keyboard.type(CREDS.email);

  await page.click(PASSWORD_SELECTOR);
  await page.keyboard.type(CREDS.password);

  await page.click(BUTTON_SELECTOR);

  // browser.close();
}

run();
