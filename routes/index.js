var express = require('express');
var router = express.Router();

const products = []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shopping Cart' });
});

module.exports = router;
