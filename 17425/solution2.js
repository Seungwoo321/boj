const filePath = require('path').join(__dirname, 'input');
const [t, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution(t, arr) {
    let m = 1e6 + 1
    const dp = new Array(m + 1).fill(1);
    for (let i = 2; i <= m; i++) {
        for (let j = 1; j * i <= m; j++) {
            dp[i * j] += i
        }
        dp[i] += dp[i - 1];
    }
    const answer = [];
    let i = 0;
    while (i < t) {
        answer.push(dp[arr[i++]]);
    }
    return answer.join('\n');
}
console.log(solution(+t, arr.map(Number)));