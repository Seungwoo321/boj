const filePath = require('path').join(__dirname, 'input');
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim();

function solution (n) {
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= n; i ++) {
        if (i >= 3) dp[i] = Math.min(dp[i], dp[i - 3] + 1);
        if (i >= 5) dp[i] = Math.min(dp[i], dp[i - 5] + 1);
    }
    return dp[n] === Infinity ? -1 : dp[n];
}

console.log(solution(+input));