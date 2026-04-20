const fs = require('fs');
const path = require('path');

const dirPth = path.join(__dirname, 'crud');
const filePath = `${dirPth}/apple.txt`;

// fs.writeFileSync(`${dirPth}/apple.txt`, 'This is an apple.');

// fs.readFile(filePath, 'utf8', (err, item) => {
//     console.log(item);    
// })

// fs.appendFile(filePath, '\nThis is an orange.',(err)=>{
//     if(!err) console.log('File is updated');
// })

// fs.rename(filePath, `${dirPth}/fruit.txt`, (err) => {
//     if(!err) console.log('File is renamed');
// })

// fs.unlink(`${dirPth}/apple.txt`, (err) => {
//     if(!err) console.log('File is deleted');
// })