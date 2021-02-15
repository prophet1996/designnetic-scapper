const fs = require("fs");
const path = require("path");
const baseUrl = "https://www.insaraf.com/";
const scraperObject = {
  url: path.join(baseUrl, "pages", "furniture-categories"),
  async scraper(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);
    await page.waitForSelector(".product-block-title");

    // Get the link to all the required books
    let categories = await page.$$eval(
      "#content > div.blocklayout.list-collections > div > div.sub > p",
      (links) => {
        // Make sure the book to be scraped is in stock
        // links = links.filter(link => link.querySelector('.instock.availability > i').textContent !== "In stock")
        // Extract the links from the data
        links = links.map(
          (link) => link.querySelector(".product-block-title > b").innerHTML
        );
        return links;
      }
    );
    // console.log(categories);
    //GOT THE CATEGORIES HERE
    let workers = [];
    categories.forEach((category) => {
      workers.push(
        new Promise(async (resolve, reject) => {
          category = category.toLowerCase().trim();
          category = category.split(" ").join("-");
          await page.goto(path.join(baseUrl, "collections", category));
          const products = await page.$$eval(
            "#shopify-section-collection-template > div > div.blocklayout.do-infinite > div > div.sub > div.desktop-only",
            (items) => {
              return items.map(
                (item) =>
                  item.querySelector(".product-block-title > b").innerHTML
              );
            }
          );
          resolve(products);
        })
      );
    });
    const productsFromEachCategory = [];
    workers = workers.slice(0, 3);
    for (const getProducts of workers) {
      productsFromEachCategory.push(await getProducts);
      console.log(getProducts);
    }
    fs.writeFile("products-listings.txt", productsFromEachCategory, (err) => {
      if (err) {
        console.log("write error");
      }
    });
  },
};

module.exports = scraperObject;
