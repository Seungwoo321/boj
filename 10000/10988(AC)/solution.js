
const filePath = './input';
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim();

function solution (str) {
    return str === str.split('').reverse().join('') ? 1 : 0;
}

console.log(solution(input));
