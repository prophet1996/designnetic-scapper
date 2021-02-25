/* eslint-disable no-restricted-syntax */
const { MongoClient, ObjectID } = require('mongodb');
/* eslint-disable camelcase */
// const assert = require('assert').strict;
const nano = require('nano');
const secret = require('./secret.json');

const mongoProducts = [{
  media: [{
    alt: null,
    id: 7770014023745,
    position: 1,
    preview_image: {
      aspect_ratio: 0.909, height: 1100, width: 1000, src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-1.jpg?v=1611235161',
    },
    aspect_ratio: 0.909,
    height: 1100,
    media_type: 'image',
    src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-1.jpg?v=1611235161',
    width: 1000,
  }, {
    alt: null,
    id: 7770014056513,
    position: 2,
    preview_image: {
      aspect_ratio: 0.909, height: 1100, width: 1000, src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-2.jpg?v=1611235104',
    },
    aspect_ratio: 0.909,
    height: 1100,
    media_type: 'image',
    src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-2.jpg?v=1611235104',
    width: 1000,
  }, {
    alt: null,
    id: 7770014089281,
    position: 3,
    preview_image: {
      aspect_ratio: 0.909, height: 1100, width: 1000, src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-3.jpg?v=1611235124',
    },
    aspect_ratio: 0.909,
    height: 1100,
    media_type: 'image',
    src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-3.jpg?v=1611235124',
    width: 1000,
  }, {
    alt: null,
    id: 7770014122049,
    position: 4,
    preview_image: {
      aspect_ratio: 0.909, height: 1100, width: 1000, src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-4.jpg?v=1611235173',
    },
    aspect_ratio: 0.909,
    height: 1100,
    media_type: 'image',
    src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-4.jpg?v=1611235173',
    width: 1000,
  }, {
    alt: null,
    id: 7770014154817,
    position: 5,
    preview_image: {
      aspect_ratio: 0.909, height: 1100, width: 1000, src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-5.jpg?v=1611235182',
    },
    aspect_ratio: 0.909,
    height: 1100,
    media_type: 'image',
    src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-5.jpg?v=1611235182',
    width: 1000,
  }, {
    alt: null,
    id: 7770014187585,
    position: 6,
    preview_image: {
      aspect_ratio: 0.909, height: 1100, width: 1000, src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-6.jpg?v=1611230438',
    },
    aspect_ratio: 0.909,
    height: 1100,
    media_type: 'image',
    src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-6.jpg?v=1611230438',
    width: 1000,
  }, {
    alt: null,
    id: 7770014220353,
    position: 7,
    preview_image: {
      aspect_ratio: 0.909, height: 1100, width: 1000, src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-7.jpg?v=1611235152',
    },
    aspect_ratio: 0.909,
    height: 1100,
    media_type: 'image',
    src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-7.jpg?v=1611235152',
    width: 1000,
  }],
  price: 1219900,
  available: true,
  featured_image: '//cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-1.jpg?v=1611235161',
  name: 'Solid Wood Terzo Beige Fabric Lampshade Series Hanging Light With Brown Base',
  variants: [{
    id: 32345716916289, title: 'L 91 x D 15 x H 84 cms / Brown', option1: 'L 91 x D 15 x H 84 cms', option2: 'Brown', option3: null, sku: 'SSL00019', requires_shipping: true, taxable: true, featured_image: null, available: true, name: 'Solid Wood Terzo Beige Fabric Lampshade Series Hanging Light With Brown Base - L 91 x D 15 x H 84 cms / Brown', public_title: 'L 91 x D 15 x H 84 cms / Brown', options: ['L 91 x D 15 x H 84 cms', 'Brown'], price: 1219900, weight: 0, compare_at_price: 1399900, inventory_quantity: 0, inventory_management: 'shopify', inventory_policy: 'continue', barcode: '',
  }],
  url: '/products/solid-wood-terzo-beige-fabric-lampshade-series-hanging-light-with-brown-base',
  imageLink: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-1_1024x1024.jpg?v=1611235161',
  images: ['//cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-1.jpg?v=1611235161', '//cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-2.jpg?v=1611235104', '//cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-3.jpg?v=1611235124', '//cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-4.jpg?v=1611235173', '//cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-5.jpg?v=1611235182', '//cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-6.jpg?v=1611230440', '//cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-7.jpg?v=1611235152'],
  tags: ['accessory', 'All', 'app', 'baex', 'meta-est-7 Days', 'meta-image-large', 'meta-label-EXTRA 10% OFF', 'month', 'other', 'shng-lgt', 'sim-lmp'],
  description: "<strong>Coupon </strong>Applicable :<strong> NEWSPL10 </strong>(10%)<br><strong></strong> <!-- split -->\\n<p><strong><span>Size </span></strong>: 36<span data-mce-fragment=\\\"1\\\"> × 6 × 33 inch</span><span data-mce-fragment=\\\"1\\\"><br></span><strong>Wire Length</strong> : 2m<br><strong>Recommended Wattage</strong> : 12W LED<br><strong>Number of Bulb Holders</strong> : 3<br><strong>Bulb Holder Type </strong>: E27<br><strong>Bulb Included</strong> : No<br><strong>Switch Type</strong> : None<br><strong>Base </strong><span><b>Material</b> </span>: Solid Wood ( Pine )<br><strong>Base Color</strong> : Brown<br><strong>Lampshade Material</strong> : Fabric<br><strong>Lampshade Color</strong> : Beige<br><strong>Shipping</strong><span> </span>: FREE All India<span> </span><em>(No Pincode check Required)</em><span> </span><br><strong>Estimated Shipping Time</strong><span> </span>: 11 Days<br><strong>Assembly</strong><span> </span>: <span data-mce-fragment=\\\"1\\\">Self Assembly</span>.</p>\\n<!-- split -->\\n<p><strong>Free Assembly</strong><span> </span>: Bangalore, Hyderabad, Chennai, Mumbai, Pune, Surat, Delhi, Gurgaon, Noida, Greater Noida, Ghaziabad. </p>\\n<p><strong>Other Cities</strong><span> </span>: Assembly for Nominal charges in available cities, such as about INR 250-450 for a Series Hanging Light. Payable after assembly, payable directly to assembly Person.</p>\\n<p>All the tools, accessories and instruction required to assemble the products comes within the packet only. <span>Our service partner will visit your location within 72 business hours from the delivery of the product.</span></p>\\n<p><strong>Care</strong><span></span></p>\\n<ul>\\n<li><strong>Premium Finish, thus no regular polishing required.</strong></li>\\n<li>Always use coasters or mats while keeping hot, cold or wet materials on the surface else this can affect the polish.</li>\\n<li>Any spillage should be wiped dry with a soft cloth immediately as there is a chance of staining.</li>\\n<li>Any cleaning needs to be done with water only.</li>\\n<li>Colour / polish can fade due to prolonged exposure to sunlight.</li>\\n</ul>\\n<p><strong>Warranty</strong></p>\\n<ul class=\\\"product_features_list\\\">\\n<li>\\n<strong>Lifetime Warranty for Wood</strong><span> </span>termite Resistance.</li>\\n<li>The product comes with a 12 month warranty against any manufacturing defects in the materials that have been used. During this period, Saraf Furniture will in its sole discretion, repair or replace the defective component, or replace the entire product if found to be defective in material or workmanship.</li>\\n<li>Fabrics, leatherettes and leathers, if used, will not be covered by the above Warranty unless explicitly mentioned. Please refer to the care instructions to maximise the life of these materials.</li>\\n<li>Solid Wood over the period of time develop minor cracks, it is known as \\\"Checks\\\" in Timber industry. These checks are not faults or defects but the characteristic of solid wood as an entity, wood tends to dry over the period of time but this phenomena does not hamper the life of furniture.</li>\\n<li>The warranty does not cover damages due to usage of the product beyond its intended use and wear &amp; tear in the natural course of product usage.</li>\\n<li>Any modifications or alterations made to the products post purchase are not recommended and will void the entire Warranty.</li>\\n</ul>\\n<p><strong>Quality</strong></p>\\n<ul>\\n<li>The wood used in the furniture is perfectly seasoned for optimum moisture content, to reduce the possibility of seasonal expansion or contraction of the products.</li>\\n<li>Post manufacturing, each product has gone through a stringent quality checking process in multi-stages, with a checkpoint of multiple quality aspects</li>\\n<li>Our furniture is made of natural materials, which will have natural differences and the occasional minor blemish</li>\\n<li class=\\\"_3YhLQA\\\">The color of the product may vary slightly compared to the picture displayed on your screen. This is due to lighting, pixel quality and color settings.</li>\\n<li class=\\\"_3YhLQA\\\">Please check the product's dimensions to ensure the product will fit in the desired location. Also, check if the product will fit through the entrance(s) and door(s) of the premises.</li>\\n<li class=\\\"_3YhLQA\\\">Please expect an unevenness of up to 5 mm in the product due to differences in surfaces and floor levels.</li>\\n</ul>\\n<p><strong>Returns</strong></p>\\n<ul>\\n<li><strong>Easy &amp; Fast Returns.</strong></li>\\n<li>On the off-chance that a defect appears in the product after it is delivered, please reach us on<span> support</span><span>@insaraf.com . </span>We will assess the damage and get back to you with a solution as soon as we can.</li>\\n</ul>\\n<p><strong>EMI</strong></p>\\n<p>To avail EMI, just choose the EMI option while making the payment of your Order<span> </span><em>(Final step of order completion)</em><br><br>EMI available with Credit Cards of the Following Banks,<br><br>1. AXIS BANK Credit Card<br>2. SBI Credit Card<br>3. AMEX Credit Card<br>4. HDFC Credit Card<br>5. HSBC Credit Card<br>6. ICICI Credit Card<br>7. Standard Chartered Credit Card<br>8. KOTAK Credit Card<br>9. IndusInd Credit Card<br>10. RBL Credit Card<br>11. YES BANK Credit Card<br><br>Duration Available:<br><br>3 Months<br>6 Months<br>9 Months<br>12 Months<br><br>Standard Interest Charged by the bank, the total amount , interest amount and the EMI amount will be shown before making the payment at the payment Page.</p>\\n<div id=\\\"gtx-trans\\\" style=\\\"position: absolute; left: 144px; top: 350px;\\\">\\n<div class=\\\"gtx-trans-icon\\\"></div>\\n</div>",
  category: 'accessories',
  options: [{ name: 'Size', position: 1, values: ['L 91 x D 15 x H 84 cms'] }, { name: 'Base Color', position: 2, values: ['Brown'] }],
  published_at: { $date: '2021-02-25T13:07:10.800Z' },
  createdAt: { $date: '2021-02-25T13:06:59.620Z' },
  updatedAt: { $date: '2021-02-25T13:07:10.821Z' },
  created_by: { $oid: '6034810322b36a1e6c784f96' },
  updated_by: { $oid: '6034810322b36a1e6c784f96' },
}];
const couchProduct = [{
  _id: '1c214d48262838b7fcedf4eb40000fac',
  _rev: '1-f9a226496c58fcdd9bb9a38a8be1e331',
  category: 'accessories',
  name: 'Solid Wood Terzo Beige Fabric Lampshade Series Hanging Light With Brown Base',
  price: 'Rs. 12,199.00 ',
  imageLink: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-1_1024x1024.jpg?v=1611235161',
  productLink: 'https://www.insaraf.com/collections/accessories/products/solid-wood-terzo-beige-fabric-lampshade-series-hanging-light-with-brown-base',
  productInfo: {
    id: 4647124009025,
    title: 'Solid Wood Terzo Beige Fabric Lampshade Series Hanging Light With Brown Base',
    handle: 'solid-wood-terzo-beige-fabric-lampshade-series-hanging-light-with-brown-base',
    description: "<strong>Coupon </strong>Applicable :<strong> NEWSPL10 </strong>(10%)<br><strong></strong> <!-- split -->\n<p><strong><span>Size </span></strong>: 36<span data-mce-fragment=\"1\"> × 6 × 33 inch</span><span data-mce-fragment=\"1\"><br></span><strong>Wire Length</strong> : 2m<br><strong>Recommended Wattage</strong> : 12W LED<br><strong>Number of Bulb Holders</strong> : 3<br><strong>Bulb Holder Type </strong>: E27<br><strong>Bulb Included</strong> : No<br><strong>Switch Type</strong> : None<br><strong>Base </strong><span><b>Material</b> </span>: Solid Wood ( Pine )<br><strong>Base Color</strong> : Brown<br><strong>Lampshade Material</strong> : Fabric<br><strong>Lampshade Color</strong> : Beige<br><strong>Shipping</strong><span> </span>: FREE All India<span> </span><em>(No Pincode check Required)</em><span> </span><br><strong>Estimated Shipping Time</strong><span> </span>: 11 Days<br><strong>Assembly</strong><span> </span>: <span data-mce-fragment=\"1\">Self Assembly</span>.</p>\n<!-- split -->\n<p><strong>Free Assembly</strong><span> </span>: Bangalore, Hyderabad, Chennai, Mumbai, Pune, Surat, Delhi, Gurgaon, Noida, Greater Noida, Ghaziabad. </p>\n<p><strong>Other Cities</strong><span> </span>: Assembly for Nominal charges in available cities, such as about INR 250-450 for a Series Hanging Light. Payable after assembly, payable directly to assembly Person.</p>\n<p>All the tools, accessories and instruction required to assemble the products comes within the packet only. <span>Our service partner will visit your location within 72 business hours from the delivery of the product.</span></p>\n<p><strong>Care</strong><span></span></p>\n<ul>\n<li><strong>Premium Finish, thus no regular polishing required.</strong></li>\n<li>Always use coasters or mats while keeping hot, cold or wet materials on the surface else this can affect the polish.</li>\n<li>Any spillage should be wiped dry with a soft cloth immediately as there is a chance of staining.</li>\n<li>Any cleaning needs to be done with water only.</li>\n<li>Colour / polish can fade due to prolonged exposure to sunlight.</li>\n</ul>\n<p><strong>Warranty</strong></p>\n<ul class=\"product_features_list\">\n<li>\n<strong>Lifetime Warranty for Wood</strong><span> </span>termite Resistance.</li>\n<li>The product comes with a 12 month warranty against any manufacturing defects in the materials that have been used. During this period, Saraf Furniture will in its sole discretion, repair or replace the defective component, or replace the entire product if found to be defective in material or workmanship.</li>\n<li>Fabrics, leatherettes and leathers, if used, will not be covered by the above Warranty unless explicitly mentioned. Please refer to the care instructions to maximise the life of these materials.</li>\n<li>Solid Wood over the period of time develop minor cracks, it is known as \"Checks\" in Timber industry. These checks are not faults or defects but the characteristic of solid wood as an entity, wood tends to dry over the period of time but this phenomena does not hamper the life of furniture.</li>\n<li>The warranty does not cover damages due to usage of the product beyond its intended use and wear &amp; tear in the natural course of product usage.</li>\n<li>Any modifications or alterations made to the products post purchase are not recommended and will void the entire Warranty.</li>\n</ul>\n<p><strong>Quality</strong></p>\n<ul>\n<li>The wood used in the furniture is perfectly seasoned for optimum moisture content, to reduce the possibility of seasonal expansion or contraction of the products.</li>\n<li>Post manufacturing, each product has gone through a stringent quality checking process in multi-stages, with a checkpoint of multiple quality aspects</li>\n<li>Our furniture is made of natural materials, which will have natural differences and the occasional minor blemish</li>\n<li class=\"_3YhLQA\">The color of the product may vary slightly compared to the picture displayed on your screen. This is due to lighting, pixel quality and color settings.</li>\n<li class=\"_3YhLQA\">Please check the product's dimensions to ensure the product will fit in the desired location. Also, check if the product will fit through the entrance(s) and door(s) of the premises.</li>\n<li class=\"_3YhLQA\">Please expect an unevenness of up to 5 mm in the product due to differences in surfaces and floor levels.</li>\n</ul>\n<p><strong>Returns</strong></p>\n<ul>\n<li><strong>Easy &amp; Fast Returns.</strong></li>\n<li>On the off-chance that a defect appears in the product after it is delivered, please reach us on<span> support</span><span>@insaraf.com . </span>We will assess the damage and get back to you with a solution as soon as we can.</li>\n</ul>\n<p><strong>EMI</strong></p>\n<p>To avail EMI, just choose the EMI option while making the payment of your Order<span> </span><em>(Final step of order completion)</em><br><br>EMI available with Credit Cards of the Following Banks,<br><br>1. AXIS BANK Credit Card<br>2. SBI Credit Card<br>3. AMEX Credit Card<br>4. HDFC Credit Card<br>5. HSBC Credit Card<br>6. ICICI Credit Card<br>7. Standard Chartered Credit Card<br>8. KOTAK Credit Card<br>9. IndusInd Credit Card<br>10. RBL Credit Card<br>11. YES BANK Credit Card<br><br>Duration Available:<br><br>3 Months<br>6 Months<br>9 Months<br>12 Months<br><br>Standard Interest Charged by the bank, the total amount , interest amount and the EMI amount will be shown before making the payment at the payment Page.</p>\n<div id=\"gtx-trans\" style=\"position: absolute; left: 144px; top: 350px;\">\n<div class=\"gtx-trans-icon\"></div>\n</div>",
    published_at: '2021-01-21T17:31:19+05:30',
    created_at: '2021-01-21T17:28:32+05:30',
    vendor: 'Symplify INTERIO',
    type: 'Accessories',
    tags: [
      'accessory',
      'All',
      'app',
      'baex',
      'meta-est-7 Days',
      'meta-image-large',
      'meta-label-EXTRA 10% OFF',
      'month',
      'other',
      'shng-lgt',
      'sim-lmp',
    ],
    price: 1219900,
    price_min: 1219900,
    price_max: 1219900,
    available: true,
    price_varies: false,
    compare_at_price: 1399900,
    compare_at_price_min: 1399900,
    compare_at_price_max: 1399900,
    compare_at_price_varies: false,
    variants: [
      {
        id: 32345716916289,
        title: 'L 91 x D 15 x H 84 cms / Brown',
        option1: 'L 91 x D 15 x H 84 cms',
        option2: 'Brown',
        option3: null,
        sku: 'SSL00019',
        requires_shipping: true,
        taxable: true,
        featured_image: null,
        available: true,
        name: 'Solid Wood Terzo Beige Fabric Lampshade Series Hanging Light With Brown Base - L 91 x D 15 x H 84 cms / Brown',
        public_title: 'L 91 x D 15 x H 84 cms / Brown',
        options: [
          'L 91 x D 15 x H 84 cms',
          'Brown',
        ],
        price: 1219900,
        weight: 0,
        compare_at_price: 1399900,
        inventory_quantity: 0,
        inventory_management: 'shopify',
        inventory_policy: 'continue',
        barcode: '',
      },
    ],
    images: [
      '//cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-1.jpg?v=1611235161',
      '//cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-2.jpg?v=1611235104',
      '//cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-3.jpg?v=1611235124',
      '//cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-4.jpg?v=1611235173',
      '//cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-5.jpg?v=1611235182',
      '//cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-6.jpg?v=1611230440',
      '//cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-7.jpg?v=1611235152',
    ],
    featured_image: '//cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-1.jpg?v=1611235161',
    options: [
      {
        name: 'Size',
        position: 1,
        values: [
          'L 91 x D 15 x H 84 cms',
        ],
      },
      {
        name: 'Base Color',
        position: 2,
        values: [
          'Brown',
        ],
      },
    ],
    url: '/products/solid-wood-terzo-beige-fabric-lampshade-series-hanging-light-with-brown-base',
    media: [
      {
        alt: null,
        id: 7770014023745,
        position: 1,
        preview_image: {
          aspect_ratio: 0.909,
          height: 1100,
          width: 1000,
          src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-1.jpg?v=1611235161',
        },
        aspect_ratio: 0.909,
        height: 1100,
        media_type: 'image',
        src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-1.jpg?v=1611235161',
        width: 1000,
      },
      {
        alt: null,
        id: 7770014056513,
        position: 2,
        preview_image: {
          aspect_ratio: 0.909,
          height: 1100,
          width: 1000,
          src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-2.jpg?v=1611235104',
        },
        aspect_ratio: 0.909,
        height: 1100,
        media_type: 'image',
        src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-2.jpg?v=1611235104',
        width: 1000,
      },
      {
        alt: null,
        id: 7770014089281,
        position: 3,
        preview_image: {
          aspect_ratio: 0.909,
          height: 1100,
          width: 1000,
          src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-3.jpg?v=1611235124',
        },
        aspect_ratio: 0.909,
        height: 1100,
        media_type: 'image',
        src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-3.jpg?v=1611235124',
        width: 1000,
      },
      {
        alt: null,
        id: 7770014122049,
        position: 4,
        preview_image: {
          aspect_ratio: 0.909,
          height: 1100,
          width: 1000,
          src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-4.jpg?v=1611235173',
        },
        aspect_ratio: 0.909,
        height: 1100,
        media_type: 'image',
        src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-4.jpg?v=1611235173',
        width: 1000,
      },
      {
        alt: null,
        id: 7770014154817,
        position: 5,
        preview_image: {
          aspect_ratio: 0.909,
          height: 1100,
          width: 1000,
          src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-5.jpg?v=1611235182',
        },
        aspect_ratio: 0.909,
        height: 1100,
        media_type: 'image',
        src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-5.jpg?v=1611235182',
        width: 1000,
      },
      {
        alt: null,
        id: 7770014187585,
        position: 6,
        preview_image: {
          aspect_ratio: 0.909,
          height: 1100,
          width: 1000,
          src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-6.jpg?v=1611230438',
        },
        aspect_ratio: 0.909,
        height: 1100,
        media_type: 'image',
        src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-6.jpg?v=1611230438',
        width: 1000,
      },
      {
        alt: null,
        id: 7770014220353,
        position: 7,
        preview_image: {
          aspect_ratio: 0.909,
          height: 1100,
          width: 1000,
          src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-7.jpg?v=1611235152',
        },
        aspect_ratio: 0.909,
        height: 1100,
        media_type: 'image',
        src: 'https://cdn.shopify.com/s/files/1/0191/2234/products/Product-Image---Terzo-Series-Beige-Fabric-Series-Hanging-Lamp-7.jpg?v=1611235152',
        width: 1000,
      },
    ],
  },
}];

const transformer = (product) => {
  const {
    category, name, imageLink,
    productInfo: {
      featured_image, description, variants, options, media, images, url, price, tags,
    },
  } = product;

  return {
    category,
    name,
    imageLink,
    variants,
    options,
    media,
    images,
    featured_image,
    url,
    price,
    tags,
    description,
    created_by: ObjectID('6034810322b36a1e6c784f96'),
    updated_by: ObjectID('6034810322b36a1e6c784f96'),
  };
};

// console.log(mongoProducts[0][0], couchProduct[0][0]);
// console.log(assert.equal(Object.keys(mongoProducts[0]).sort(),
//   Object.keys(transformer(couchProduct)).sort()));
// read from couch

const nanodb = nano(`http://${secret.username}:${secret.password}@localhost:5984`);

const uri = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    const insarafInstance = nanodb.use('insaraf');
    const db = await client.db('designnetic-store');

    const bulk = db.collection('products').initializeUnorderedBulkOp();
    const doclist = await insarafInstance.list({ include_docs: true });

    for (const doc of doclist.rows) {
      bulk.insert(transformer(doc.doc));
    }
    bulk.execute();
    console.log('Connected successfully to server');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// insert to mongo now
