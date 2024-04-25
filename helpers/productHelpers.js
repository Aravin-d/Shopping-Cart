const {client, connect} = require("../config/connection");
const db = client.db('shopping-cart-node');
const { collection } = require('../config/collection');

//to add product by admin
function addProduct(product, callback){
   db.collection(collection.PRODUCT_COLLECTION).insertOne(product).then((data) => {
        const insertId = data.insertedId.toString();
        callback(insertId);
   })
}

//to list all product by admin
function getProducts(){
    return new Promise( async (resolve, reject) => {
        let products = await db.collection(collection.PRODUCT_COLLECTION).find().toArray();
        resolve(products);
    })
}

module.exports = {
    addProduct,
    getProducts,
}