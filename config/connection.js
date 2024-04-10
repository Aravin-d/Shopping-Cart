const { MongoClient } = require("mongodb");
const dotenv = require('dotenv').config();

const uri = process.env.CONNECTION_STRING;

const client = new MongoClient(uri, {
    useNewUrlParser : true,
    useUnifiedTopology : true
});

async function connect() {
    try{
        await client.connect();
        console.log('DATABASE CONNECTED');
        const database = client.db('Shopping-Cart');
    }catch(err){
        console.error(err);
    }
}

module.exports = connect;