const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution(n, arr) {
    for (let i = 1; i < n; i++) {
        arr[i] = Math.max(arr[i - 1] * arr[i], arr[i]);
    }
    return Math.max.apply(null, arr).toFixed(3);
}
console.log(solution(+n, arr.map(Number)));
