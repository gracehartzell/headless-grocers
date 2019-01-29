const puppeteer = require('puppeteer');
// const CREDS = require('./credsHEB');

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto('https://heb.com/');

  // const LOGIN_SELECTOR = '#nvrl-login > a';
  // const EMAIL_SELECTOR = '#login_with_password_form_email';
  // const PASSWORD_SELECTOR = '#login_with_password_form_password';
  // const BUTTON_SELECTOR =
  //   '#signup-widget > div > div > div > div:nth-child(3) > form > div > button';
  const INPUT_SELECTOR = '#searchForm';
  const SEARCH_SUBMIT_SELECTOR = '#searchsubmit';
  // const CART_ITEM =
  //   '#react-main-content > div > div > div > div:nth-child(2) > div > div > ul > li:nth-child(1) > div > span > span > button > div';

  await page.click(INPUT_SELECTOR);
  await page.keyboard.type('banana');
  await page.click(SEARCH_SUBMIT_SELECTOR);

  // await page.click(LOGIN_SELECTOR);
  // await page.waitForNavigation();

  // await page.click(EMAIL_SELECTOR);
  // await page.keyboard.type(CREDS.email);

  // await page.click(PASSWORD_SELECTOR);
  // await page.keyboard.type(CREDS.password);

  // await page.click(BUTTON_SELECTOR);
  // await page.waitForNavigation();
  // await page.click(CART_ITEM);
  // browser.close();
}

run();
