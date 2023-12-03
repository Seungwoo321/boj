const filePath = require('path').join(__dirname, 'input');
const n = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
function solution (n) {
    let sum = 0;
    for (let i = 1; i <= n; i ++) {
        sum += i * Math.floor(n / i);
    }
    return sum;
}
console.log(solution(+n));