const path = require('path');
const fs = require('fs');
const {client, connect} = require("../config/connection");
const db = client.db('shopping-cart-node');


// function addProduct(product, callback){
//    db.collection('product').insertOne(product).then((data) => {
//         console.log(`db data is : ${data}`);
//         callback(true);
//    })
// }

function addProduct(product, image){
    return new Promise((resolve, reject) => {
        db.collection('product').insertOne(product)
        .then((result) => {
            const insertId = result.insertedId.toString();

            const imageFileName = `${insertId}${path.extname(image.originalname)}`;
            const imagePath = path.join(__dirname, 'public\images', imageFileName)
        })
    })
}

module.exports = {
    addProduct,
}