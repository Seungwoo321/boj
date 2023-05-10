const filePath = './input';
const [N, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (arr) {
    arr.sort((a, b) => a[0] - b[0]);
    return arr.reduce((acc, cur) => acc < cur[0] ? cur[0] + cur[1] : acc + cur[1], 0);
}
console.log(solution(arr.map(v => v.split(' ').map(Number))));