const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'e-comm';

async function dbConnect() {
    let res = await client.connect();
    let db = res.db(database);
    return collection = db.collection('product');
}

module.exports = dbConnect;