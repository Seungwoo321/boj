const filePath = './input';
const input = require('fs').readFileSync(filePath).toString().trim().split('');
const alpha = 'abcdefghijklmnopqrstuvwxyz';
const arr = new Array(26).fill(0);
input.forEach((v, i) => arr[alpha.indexOf(v)] ++);
console.log(arr.join(' '));

