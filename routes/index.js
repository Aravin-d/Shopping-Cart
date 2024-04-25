const express = require("express");
const router = express.Router();
const productHelpers = require("../helpers/productHelpers");
const userHelpers = require('../helpers/userHelpers');

/* GET home page. */
router.get("/", (req, res, next) => {
  productHelpers.getProducts().then((products) => {
    res.render("index", { products });
  });
});

router.get("/login", (req, res, next) => {
  res.render("login");
});

router.get("/signup", (req, res, next) => {
  res.render("signup");
});

router.post("/signup", (req, res, next) => {
  userHelpers.signup(req.body);
  res.render('signup');  
});

router.post('/login', (req, res, next) => {
  userHelpers.login(req.body).then((response) => {
    if(response.status){
      res.redirect('/');
    }else{
      res.redirect('/login');
    }
  })

})

module.exports = router;
