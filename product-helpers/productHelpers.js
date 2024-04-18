const path = require('path');
const fs = require('fs');
const {client, connect} = require("../config/connection");
const db = client.db('shopping-cart-node');


function addProduct(product, callback){
   db.collection('product').insertOne(product).then((data) => {
        console.log(`db data is : ${data}`);
        callback(true);
   })
}


module.exports = {
    addProduct,
}