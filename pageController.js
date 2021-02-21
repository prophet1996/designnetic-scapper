const nano = require('nano');
const pageScraper = require('./pageScraper');
const secret = require('./secret.json');

async function scrapeAll(browserInstance) {
  let browser;
  const nanodb = nano(`http://${secret.username}:${secret.password}@localhost:5984`);
  try {
    const insarafInstance = nanodb.use('insaraf');
    browser = await browserInstance;
    const productsFromEachCategory = await pageScraper.scraper(browser);
    await insarafInstance.bulk({ docs: productsFromEachCategory });
  } catch (err) {
    console.log('Could not resolve the browser instance => ', err);
  }
  console.clear();
  console.log('Scrapping Completed');
}

module.exports = (browserInstance) => scrapeAll(browserInstance);
