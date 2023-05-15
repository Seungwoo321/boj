const filePath = require('path').join(__dirname, 'input');
const [n, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
function solution (n, arr) {
    arr.sort((a, b) => a - b);
    return arr[0] * arr[n - 1];
}
console.log(solution(+n, arr.split(' ').map(Number)));