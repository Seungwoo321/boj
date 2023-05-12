const filePath = require('path').join(__dirname, 'input');
const [nums, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, m] = nums.split(' ').map(Number);
function solution (n, m, arr) {

    
}
console.log(solution(n, m, arr.split(' ').map(Number)));