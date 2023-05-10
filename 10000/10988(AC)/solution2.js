
const filePath = './input';
const str = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim();

let reverse = '';
for (let i = 0; i < str.length; i ++) {
    reverse = str[i] + reverse;
}
console.log(str === reverse ? 1: 0);

