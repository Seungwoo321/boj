const filePath = require('path').join(__dirname, 'input');
const [n, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const nums = arr.split(' ').map(Number);
console.log(Math.max(...nums.reduce((acc, cur) => acc.length ? acc.push(Math.max(cur, acc[acc.length - 1] + cur)) && acc : [cur], [])));

