const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'e-comm';

async function getData() {
    let res = await client.connect();
    let db= res.db(database);
    let collection = db.collection('product');
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();