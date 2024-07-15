const filePath = require('path').join(__dirname, 'input');
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim();

function solution (n) {
    const MOD = 10007;
    const dp = [1, 1];
    for (let i = 2; i <= n; i ++) {
        dp[i] = (dp[i - 1] + (dp[i -2] * 2)) % MOD;
    }
    return dp[n];
}
console.log(solution(+input));