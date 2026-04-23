const express = require('express');
const EventEmitter = require('events');

const app = express();

const event = new EventEmitter();

let count=0;


event.on("apiCalled",()=>{
    count++;
    console.log("Event Called", count);
})


app.get("/",(req,res)=>{
    res.send("Api is working successfully");
    event.emit("apiCalled");
})
app.get("/search",(req,res)=>{
    res.send("Searched successfully");
    event.emit("apiCalled");
})
app.get("/update",(req,res)=>{
    res.send("Updated successfully");
    event.emit("apiCalled");
})




app.listen(5000)