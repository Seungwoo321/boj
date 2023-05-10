const filePath = require('path').join(__dirname, 'input');
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, l] = num.split(' ');
function solution (n, l, arr) {
    let last = 0;
    let result = 0;
    arr.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < n; i++) {
        if (arr[i][1] <= last) continue;
        const start = Math.max(arr[i][0], last);
        const count = Math.ceil((arr[i][1] - start) / l);
        last = start + (count * l);
        result += count;
    }
    return result;
}
console.log(solution(+n, +l, arr.map(r => r.split(' ').map(Number))));