const puppeteer = require('puppeteer');
// const CREDS = require('./creds');

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto('https://www.yummly.com/recipe/Tahini-Sauce-1866051');

  const SHOP_SELECTOR = '#basketfulDefaultButton';
  await page.waitForSelector(SHOP_SELECTOR);
  await page.click(SHOP_SELECTOR);

  // const HEB_SELECTOR =
  // 'button[data-selectedretailerid="a63147ae-67f4-4e71-97ce-9dff0582ef99]';

  // await page.waitForSelector(HEB_SELECTOR);
  // await page.click(HEB_SELECTOR);

  const rows = await page.evaluate(() =>
    Array.from(document.querySelectorAll('tr').innerHTML),
  ); // returns [object Promise]
  console.log(`HERE ARE THE ROWS: ${rows}, TYPEOF: ${typeof rows}`); // rows = object

  rows.forEach(row => {
    // Row is going to be a node. Specifically a tr element.
    const children = row.childNodes;
    if (children.length > 1) {
      const targetTd = children && children[1];
      const ingredient = targetTd.childNodes[1].innerText;
      console.log(`Ingredient to be milled: ${ingredient}`);
    }
  });

  // browser.close();
}
run();

// document.querySelectorAll('.jss1951 > tr > td:nth-type(2) > p');
