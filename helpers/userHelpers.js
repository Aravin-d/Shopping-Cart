const {client} = require("../config/connection");
const db = client.db('shopping-cart-node');
const { collection } = require('../config/collection');
const bcrypt = require('bcrypt');

// To sign up users
function signup(userData){
    return new Promise(async (resolve, reject) => {
        userData.Password = await bcrypt.hash(userData.Password, 10);
        db.collection(collection.USER_COLLECTION).insertOne(userData);
    })
}

// To log In users 
function login(userData){
    return new Promise(async (resolve, reject) => {
        let loginStatus = false;
        let response = {};
        // assigning user details to user variable if email address exist in db
        let user = await db.collection(collection.USER_COLLECTION).findOne({Email : userData.Email });

        // if user is true
        if(user){

            //comparing browser received password with db password
            bcrypt.compare(userData.Password, user.Password).then((status) => {
                //the status variable recives true or false values

                //if the status i true
                if(status){
                    //assigns value to the response object created above
                    response.user = user;
                    response.status = true;
                    //resolves response and login is success
                    resolve(response);
                }else{
                    //returns status false which denotes login failure
                    resolve({status : false})
                }
            })
        }else{
            //if the user is not found still resolves false
            resolve({status : false})
        }
    })
}

module.exports = {
    signup,
    login,
}