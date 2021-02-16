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
        async () => {
          console.log(category)
          category = category.toLowerCase().trim().replace("/","");
          const categorySplit = category.split(" ");
          console.log(categorySplit);
          if (categorySplit.includes('&amp;')){
            category = categorySplit[0];
          }else {
            category = categorySplit.filter(v=>v.length>2).join("-");
          }
          console.log(category)
          const newPath = path.join(baseUrl, "collections", category);
          await page.goto(newPath);
          const is404page = await is404(page);
          if(is404page){
            fs.appendFile("404s.txt", `${category.toString()}:${newPath} \n`, (err) => {
              if (err) {
                console.log('error writing 404s');
              }
              console.log("writing 404 error");
            });
            return [];
          }
          const products = await page.$$eval(
            "#shopify-section-collection-template > div > div.blocklayout.do-infinite > div > div.sub > div.desktop-only",
            (items) => {
              return items.map(
                (item) =>
                  item.querySelector(".product-block-title > b").innerHTML
              );
            }
          );
          return products;
          }
      );
    });
    const productsFromEachCategory = [];
    // workers = workers.slice(7,8);
    for (const getProducts of workers) {
      const products = await getProducts();
      if(products)
      productsFromEachCategory.push();
    }
    fs.appendFile("products-listings.txt", `${productsFromEachCategory.toString()}\n   `, (err) => {
      if (err) {
        console.log("write error");
      }
    });
    
  },
};

const is404 = async (page)=>{
            const map=  await page.$$eval('#content > div.content-header',headers=>{
              return headers.map(header => header.querySelector('.page-title').innerHTML)
            })
            return map[0]==='404 Page Not Found';
}

module.exports = scraperObject;
