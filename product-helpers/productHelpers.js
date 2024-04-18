const {client, connect} = require("../config/connection");
const db = client.db('shopping-cart-node');


function addProduct(product, callback){
   db.collection('product').insertOne(product).then((data) => {
        const insertId = data.insertedId.toString();
        callback(insertId);
   })
}


module.exports = {
    addProduct,
}