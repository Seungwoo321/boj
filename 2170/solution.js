const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    arr.sort((a, b) => a[0] - b[0]);
    let sum = 0;
    let last = -Infinity;
    for (let i = 0; i < n; i ++) {
        if (arr[i][1] < last) continue;
        arr[i][0] = Math.max(arr[i][0], last);
        sum += arr[i][1] - arr[i][0];
        last = arr[i][1];
    }
    return sum;
}
console.log(solution(+n, arr.map(r => r.split(' ').map(Number))));