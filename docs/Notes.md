# Notes

## Day One, Part One: Initialization

For starting off, I wasn't entirely sure how I should structure the repository
since this isn't something I've ever done before.

#### ESLint and Prettier

- I love [Prettier](https://prettier.io/) and I'm not ashamed of it. It makes
  for a lovely competition with yourself to see how close to _Prettier Perfect_
  you can get before running it. Something that I've discovered to be
  occasionally tricky is using it in conjunction with ESLint. I'll also be
  setting it up with Airbnb's style guide (at least for the beginning). Assuming
  you've already setup a repo and already have a `package.json`, we'll follow
  these steps:

1. `npm install -D prettier eslint`

- This installs ESLint and Prettier and saves them as development dependencies

2. `npx install-peerdeps --dev eslint-config-airbnb`

- This installs the
  [Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

3. `npm install -D eslint-config-prettier eslint-plugin-prettier`

- `eslint-config-prettier` disables ESLint formatting and
  `eslint-plugin-prettier` allows ESLint to show formatting errors in realtime.

4. **Create Config Files:**

- `touch .eslintrc.json .prettierrc`
  - Instead of `eslint --init`, I'm making my own file:

```json
{
  "extends": ["airbnb", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": ["error"]
  }
}
```

- Since I already agree with most of the Prettier config options, my
  `.prettierrc` file will look like this:

```json
{
  "proseWrap": "always"
}
```

#### Important (Setup) Notes:

- You should've started out creating a `.gitignore` and it should now look like
  this:

```
node_modules/
.vscode/
```

- **Commit frequently!!!**

## Day One, Part Two: Scraping

Since scraping is a completely new realm for me, I followed a tutorial for
Puppeteer and Chrome Headless since that's what I'll be using for this project.
You can find the tutorial [here](https://github.com/emadehsan/thal).

Another site I found that was useful and interesting is an article from Hartley
Brody's blog site:
[I Don't Need No Stinking API: Web Scraping For Fun and Profit](https://blog.hartleybrody.com/web-scraping/).

### Forecasting Tricky Bits:

- There are a lot of items that will appear from searches. To start out, I might
  need to have the scraper select the first item listed.

- Sites explicitly prohibiting scraping...
  - This Whole Foods API question on `r/webdev`:
    [here](https://www.reddit.com/r/webdev/comments/3t16ru/is_there_a_whole_foods_product_api/)
  -
-

#### On Finding a Useable Site:

- Postmates (backup). Has API and is in Austin. Mainly for restaurant delivery.
  Fees will be much higher than ordering from another service.

## 31 January

Today's problem: Connecting the frontend to the backend. More specifically,
triggering the scraping actions on a button click. My game plan:

1. Figure out how to export an async function.
2. Create a button component with the function file imported

I'll start with getting the Yummly scrape to happen on a button click and then
incorporate the Instacart scrape once that's complete.

