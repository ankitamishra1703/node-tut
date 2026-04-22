const dbConnect = require('./mongodb');

const deleteData = async () => {
    let data = await dbConnect();
    let result = await data.deleteMany(
        { name: "Urvashi", age: 27, email: "urvashi@gmail.com" }

    );
    if (result.acknowledged) {
        console.log("Data Deleted");
    }
}
deleteData()