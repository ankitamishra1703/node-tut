
const http = require('http');
const colors = require('colors');
const chalk = require('chalk');


console.log("hello".blue);
console.log(chalk.blue('Hello world!'));

http.createServer((req, res) => {
    res.write("<h1>Hello, World! Ankita</h1>");
    res.end();
}).listen(4500);