const dbConnect = require('./mongodb');

const insert = async () => {
    let data = await dbConnect();
    let result = await data.insertMany([
        { name: "Nidhi", age: 30, email: "nidhi@gmail.com" },
        { name: "Urvashi", age: 27, email: "urvashi@gmail.com" },
        { name: "Garima", age: 26, email: "garima@gmail.com" }
    ]);
    if (result.acknowledged) {
        console.log("Data Inserted");
    }
}
insert()