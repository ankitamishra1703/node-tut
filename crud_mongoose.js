const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/e-comm");


const productSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
});

const saveInDB = async () => {
    const Product = mongoose.model("product", productSchema);
    let data = new Product({
        name: "Munni",
        age: 30,
        email: "Munni@gmail.com"
    });

    let res = await data.save();
    console.log(res);
};

saveInDB();

const updateInDB = async () => {
    const Product = mongoose.model("product", productSchema);
    let res = await Product.updateOne(
        { name: "Munni" },
        { $set: { age: 42 } }
    );
    console.log(res);
};

// updateInDB();

const deleteInDB = async () => {
    const Product = mongoose.model("product", productSchema);
    let res = await Product.deleteOne({ name: "Munni" });
    console.log(res);
};

// deleteInDB();

const findInDB = async () => {
    const Product = mongoose.model("product", productSchema);
    let res = await Product.find({ name: "Munni" });
    console.log(res);
};

findInDB();