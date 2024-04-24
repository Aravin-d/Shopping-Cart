var express = require('express');
var router = express.Router();
var productHelpers = require('../product-helpers/productHelpers');


/* GET home page. */
router.get('/', (req, res, next) => {
  productHelpers.getProducts().then((products) => {
    res.render('index', {products})
  })
});

router.get('/login', (req, res ,next) => {
  res.render('login');
});

router.get('/signup', (req, res, next) => {
  res.render('signup');
})

module.exports = router;
