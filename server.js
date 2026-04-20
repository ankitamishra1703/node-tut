const app=require('./app');
console.log('Hello, World!');
console.log(app);
console.log(app.x);

const arr=[1,3,4,5,3,6,3,7];
let res =arr.filter((item)=>{
    return item>=3;
})
console.log(res);