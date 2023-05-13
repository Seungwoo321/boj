const filePath = require('path').join(__dirname, 'input');
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim();
function solution (str) {
    return str.length ? str.split(' ').length : 0;
}
console.log(solution(input));