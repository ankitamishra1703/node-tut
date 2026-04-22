const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    const productSchema = new mongoose.Schema({
        name: String,  
        age: Number,      
        email: String,
    });

    const productModel = mongoose.model("product", productSchema);
    let data = new productModel({name:"Nirmal",age:30,email:"nirmal@gmail.com"});

    let res = await data.save();
    console.log(res);
};

main();