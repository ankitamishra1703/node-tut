const express = require('express');
require('./config');
const Product = require('./product');

const app = express();
app.use(express.json());

app.post('/create', async (req, res) => {
    let data = new Product(req.body);
    let result = await data.save();
    console.log(result);
    res.send("data received");
})

app.get('/list', async (req, res) => {
    let data = await Product.find();
    res.send(data);
})

app.delete('/delete/:_id', async (req, res) => {
   console.log(req.params);   
   let data = await Product.deleteOne({_id: req.params._id});
    res.send(data);
})

app.put('/update/:_id', async (req, res) => {
   console.log(req.params);   
   let data = await Product.updateOne(
    {_id: req.params._id},
    {$set: req.body});
    res.send(data);
})

app.listen(5000)