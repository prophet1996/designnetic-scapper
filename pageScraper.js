/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const is404 = async (page) => {
  const map = await page.$$eval('#content > div.content-header', (headers) => headers.map((header) => header.querySelector('.page-title').innerHTML));
  return map[0] === '404 Page Not Found';
};

const baseUrl = 'https://www.insaraf.com/';
const scraperObject = {
  url: path.join(baseUrl, 'pages', 'furniture-categories'),
  async scraper(browser) {
    const page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);
    await page.waitForSelector('.product-block-title');

    // Get the link to all the required books
    const categories = await page.$$eval(
      '#content > div.blocklayout.list-collections > div > div.sub > p',
      (links) => {
        links = links.map(
          (link) => link.querySelector('.product-block-title > b').innerHTML,
        );
        return links;
      },
    );
    // console.log(categories);
    // GOT THE CATEGORIES HERE
    const workers = [];
    let totalProducts = 0;
    let processedProducts = 0;
    let totalPages = 0;
    let processedPages = 0;
    categories.forEach((category) => {
      workers.push(
        async () => {
          category = category.toLowerCase().trim().replace('/', '');
          const categorySplit = category.split(' ');
          if (categorySplit.includes('&amp;')) {
            category = categorySplit[0];
          } else {
            category = categorySplit.filter((v) => v.length > 2).join('-');
          }
          const newPath = path.join(baseUrl, 'collections', category);
          await page.goto(newPath);
          // await page.waitForSelector('#shopify-section-collection-template > div > div.blocklayout.do-infinite > div');
          const is404page = await is404(page);
          if (is404page) {
            fs.appendFile('404s.txt', `${category.toString()}:${newPath} \n`, (err) => {
              if (err) {
                console.log('error writing 404s');
              }
              console.log('writing 404 error');
            });
            return [];
          }
          const products = await page.$$eval(
            '#shopify-section-collection-template > div > div.blocklayout.do-infinite > div',
            (items) => items.map(
              (item) => {
                try {
                  const name = item.querySelector('.product-block-title > b')?.innerHTML;
                  const imageLink = `https:${item.querySelector('.rimage-wrapper')?.children[0].innerText.split('"')[1]}`;
                  const price = item.querySelector('.money')?.innerHTML;
                  const productLink = item.querySelector('.product-block-title')?.href;

                  return {
                    name, price, imageLink, productLink,
                  };
                } catch (err) {
                  return {};
                }
              },
            ),
          );
          totalProducts += products.length;
          return { [category]: products };
        },
      );
    });
    totalPages = workers.length;
    const productsFromEachCategory = [];
    for (const getProducts of workers) {
      const products = await getProducts();
      if (products) productsFromEachCategory.push(products);
      processedPages += 1;
      console.clear();
      console.log('Processing Pages: ', (processedPages / totalPages) * 100, '%');
    }
    const resultProd = [];
    const updateProductInfo = async () => {
      for (const productCategories of productsFromEachCategory) {
        for (const categoryKey of Object.keys(productCategories)) {
          const products = productCategories[categoryKey];
          for (const product of products) {
            const { productLink } = product;
            if (!productLink) continue;
            const base = productLink.split('/');
            try {
              const body = await fetch(`https://www.insaraf.com/products/${base[base.length - 1]}.js`).then((res) => res.text());
              // productsFromEachCategory[i][categoryKey] = { ...product, productInfo: body };
              resultProd.push({ category: categoryKey, ...product, productInfo: JSON.parse(body) });
            } catch (err) { console.log(err); }
            const productPer = (processedProducts / totalProducts) * 100;
            if (productPer > 95) {
              console.log(product);
            }
            processedProducts += 1;
            console.log('Processing Products: ', productPer, '%');
          }
        }
      }
    };
    await updateProductInfo();

    fs.writeFile('products-listings.json', `${JSON.stringify(resultProd)} \n`, (err) => {
      if (err) {
        console.log('error writing data');
      }
      console.log('data written');
    });
    return resultProd;
  },
};

module.exports = scraperObject;
