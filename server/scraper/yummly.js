const puppeteer = require('puppeteer');

async function getRecipe(id) {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.setExtraHTTPHeaders({ Referer: 'https://www.yummly.com/' });
  await page.goto(`https://www.yummly.com/recipe/${id}`);

  const SHOP_SELECTOR = '#basketfulDefaultButton';
  await page.waitForSelector(SHOP_SELECTOR);
  await page.click(SHOP_SELECTOR);

  await page.waitFor(3000);

  let basketFrame;

  await page
    .mainFrame()
    .childFrames()
    .forEach(frame => {
      if (frame.name().includes('basketful_i1')) {
        basketFrame = frame;
      }
    });

  await page.waitFor(3000);
  const ingredientList = await basketFrame.$$eval(
    'td > p:nth-child(2)',
    pElements => pElements.map(el => el.innerText),
  );

  // console.log('Ingredient list leaving', ingredientList);

  browser.close();
  return ingredientList;
}

module.exports = {
  getRecipe,
};
