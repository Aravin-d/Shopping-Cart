var express = require('express');
var router = express.Router();
const productHelpers = require('../product-helpers/productHelpers');
const path = require('path');


/* GET home page. */
router.get('/', (req, res, next) => {
  productHelpers.getProducts().then((products) => {
    res.render('admin/view-products', {admin : true, products});
  })
});

router.get("/add-product", (req, res) => {
  res.render('admin/add-product');
});

router.post('/add-product', (req, res) => {
  productHelpers.addProduct(req.body, (insertId) => {

      let image = req.files.image;
      let imagePath = path.join(__dirname, `../public/product-images/${insertId}.jpg`);
      image.mv(imagePath);
    res.render('admin/add-product');
  });
})

module.exports = router;
