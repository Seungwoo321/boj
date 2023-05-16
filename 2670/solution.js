const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    for (let i = 1; i < n; i ++) {
        arr[i] = Math.max((arr[i - 1] * arr[i]).toPrecision(10), arr[i].toPrecision(10));
    }
    return (Math.round(Math.max.apply(null, arr) * 1000) / 1000);
}햣 
console.log(solution(+n, arr.map(Number)));