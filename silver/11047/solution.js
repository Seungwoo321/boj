const filePath = require('path').join(__dirname, 'input');
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, k] = num.split(' ');
function solution (n, k, arr) {
    let result = 0;
    for (let i = n - 1; i >= 0; i --) {
        const m = +arr[i];
        if (k < m) continue;
        result += parseInt(k / m);;
        k %= m
        if (k === 0) break;
    }
    return result;
}
console.log(solution(+n, +k, arr));