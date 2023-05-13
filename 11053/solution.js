const filePath = require('path').join(__dirname, 'input')
const [n, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    const dp = new Array(n).fill(1);
    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < i; j ++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }
    }
    return Math.max(...dp)
}
console.log(solution(+n, arr.split(' ').map(Number)));