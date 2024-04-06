var express = require('express');
var router = express.Router();

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
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shopping Cart', products });
});

module.exports = router;
