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
  await page.waitForNavigation();

  const searchURL = `https://www.instacart.com/store/h-e-b/search_v3/`;
  await page.goto(searchURL);

  const SEARCH_INPUT_SELECTOR =
    '#header > div > div > div.header-hero.no-hero-image > div.header-hero-inner-wrapper > div.rmq-550d79d6.rmq-48fdb2da > form > div > input[type="text"]';
  const SEARCH_BUTTON_SELECTOR =
    '#header > div > div > div.header-hero.no-hero-image > div.header-hero-inner-wrapper > div.rmq-550d79d6.rmq-48fdb2da > form > div > button';
  await page.waitForSelector(SEARCH_INPUT_SELECTOR);
  await page.click(SEARCH_INPUT_SELECTOR);
  await page.keyboard.type('bread');
  await page.click(SEARCH_BUTTON_SELECTOR);

  await page.waitForNavigation();
  const ADD_SELECTOR =
    '#search_grid_a5569d1fffa3d9fa6ae1873b08eaec23-module > ul > li:nth-child(1) > div > span > span > button';
  await page.waitForSelector(ADD_SELECTOR);
  await page.click(ADD_SELECTOR);

  // browser.close();
}

run();
