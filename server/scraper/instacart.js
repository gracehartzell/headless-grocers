/* eslint-disable */
const puppeteer = require('puppeteer');
const CREDS = require('../../creds');

async function addToCart(ingredientList) {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768 });

  await page.goto('https://www.instacart.com/store/h-e-b/storefront');

  const LOGIN_SELECTOR = '#nvrl-login > a';
  const EMAIL_SELECTOR = '#login_with_password_form_email';
  const PASSWORD_SELECTOR = '#login_with_password_form_password';
  const BUTTON_SELECTOR =
    '#signup-widget > div > div > div > div:nth-child(3) > form > div > button';
  const FIRST_SEARCH =
    '#header > div > div > div.header-hero.no-hero-image > div.header-hero-inner-wrapper > div.rmq-550d79d6.rmq-48fdb2da > form > div > input[type="text"]';
  const SUBSEQUENT_SEARCH =
    '#header > div > div > div.header-primary-nav > div.header-primary-nav-center > div > form > div > input[type="text"]';
  const ADD_SELECTOR =
    '#search_grid_a5569d1fffa3d9fa6ae1873b08eaec23-module > ul > li:nth-child(1) > div > span > span > button';
  await page.click(LOGIN_SELECTOR);
  await page.waitForNavigation();
  await page.click(EMAIL_SELECTOR);
  await page.keyboard.type(CREDS.email);
  await page.click(PASSWORD_SELECTOR);
  await page.keyboard.type(CREDS.password);
  await page.click(BUTTON_SELECTOR);
  await page.waitForNavigation();

  const mappedList = ingredientList.map(item => {
    let temp = item;
    temp = temp.replace('®', '');
    temp = temp.replace('™', '');
    temp = temp.replace(/([1-9]\sx)/g, '');
    return temp;
  });

  const CLICK_TIMEOUT = [3000, 4000, 5000];
  const clickWaitRetry = async (page, selector, retries = 0) => {
    if (retries >= CLICK_TIMEOUT.length) {
      return;
    }
    const timeout = CLICK_TIMEOUT[retries];
    try {
      await page.waitFor(selector);
      await page.click(selector);
      await page.waitFor(selector, { timeout });
    } catch (err) {
      if (retries > CLICK_TIMEOUT.length) {
        throw new Error(
          `Click ${ADD_SELECTOR} failed after ${retries} retries: ${err}`,
        );
      }
      console.log(
        `Click '${selector}' did not see '${selector}' after ${timeout}s, starting retry ${retries +
          1}`,
      );
      return clickWaitRetry(page, selector, retries + 1);
    }
  };

  for (const [index, ingredient] of mappedList.entries()) {
    console.log('Ingredient', ingredient);
    if (!index) {
      await page.waitForSelector(FIRST_SEARCH);
      await page.click(FIRST_SEARCH);
      await page.keyboard.type(ingredient);
      await page.keyboard.press('Enter');
    } else {
      await page.waitForSelector(SUBSEQUENT_SEARCH);
      const input = await page.$(SUBSEQUENT_SEARCH);
      await input.click({ clickCount: 3 });
      await input.type(ingredient);
      await page.keyboard.press('Enter');
    }
    await page.waitFor(3000);
    await clickWaitRetry(page, ADD_SELECTOR);
  }
  browser.close();
}

module.exports = {
  addToCart,
};
