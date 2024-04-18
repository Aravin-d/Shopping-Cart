var express = require('express');
var router = express.Router();
const productHelpers = require('../product-helpers/productHelpers');
const path = require('path');

const products = [
  {
    name : "Iphone",
    category : "mobile",
    description : "Apple product",
    image : "https://picsum.photos/200/200"
  },
  {
    name : "Samsung",
    category : "mobile",
    description : "Samsung product",
    image : "https://picsum.photos/200/200"
  },
  {
    name : "REDMI",
    category : "mobile",
    description : "Xiaomi product",
    image : "https://picsum.photos/200/200"
  },
  {
    name : "One plus",
    category : "mobile",
    description : "Oneplus product",
    image : "https://picsum.photos/200/200"
  },

]

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('admin/view-products', {admin : true, products});
});

router.get("/add-product", (req, res) => {
  res.render('admin/add-product');
});

router.post('/add-product', (req, res) => {
  productHelpers.addProduct(req.body, (insertId) => {

      let image = req.files.image;
      let imagePath = path.join(__dirname, `../public/images/product-images ${insertId}.jpg`);
      image.mv(imagePath);
      
  });
})

module.exports = router;
