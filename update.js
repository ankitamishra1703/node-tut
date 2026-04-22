const dbConnect = require('./mongodb');


const update = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        { name: "Nidhi"},
        { $set: { age: 31}} 
        
    );
    if (result.acknowledged) {
        console.log("Data Updated");
    }
}
update()