const express = require("express");
const router = express.Router();
const productHelpers = require("../helpers/productHelpers");
const userHelpers = require('../helpers/userHelpers');

/* GET home page. */
router.get("/", (req, res, next) => {
  // To check if user is logged in
  let user = req.session.user;
  productHelpers.getProducts().then((products) => {
    res.render("index", { products, user });
  });
});

//Function to render Login page
router.get("/login", (req, res, next) => {
  if(req.session.loggedIn){
    res.redirect('/')
  }else{
    res.render("login");
  }
});

//Function to render sign up page
router.get("/signup", (req, res, next) => {
  res.render("signup");
});

//Sign up function
router.post("/signup", (req, res, next) => {
  userHelpers.signup(req.body);
  res.render('signup');  
});

//Log in function
router.post('/login', (req, res, next) => {
  userHelpers.login(req.body).then((response) => {
    // if the credentials are correct return home page
    if(response.status){

      // creating a logged in object and setting it to be true if logged in
      req.session.loggedIn = true;
      // settting a user property in session object to be the uer details received from reponse object
      req.session.user = response.user;
      // if login is success redirected to home page
      res.redirect('/');

    }else{
      res.redirect('/login');
    }
  })

});

//Logout function
router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('/');
})


module.exports = router;
