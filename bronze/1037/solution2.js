const filePath = require('path').join(__dirname, 'input');
const [n, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
function solution(n, arr) {
    return Math.min.apply(null, arr) * Math.max.apply(null, arr);
}
console.log(solution(+n, arr.split(' ').map(Number)));