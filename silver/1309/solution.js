const filePath = require('path').join(__dirname, 'input')
const N = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()

function solution (n) {
  const dp = Array.from({ length: n + 1 }, () => new Array(3).fill(0))
  const mod = 9901
  dp[1][0] = 1
  dp[1][1] = 1
  dp[1][2] = 1
  for (let i = 2; i <= n; i ++) {
    dp[i][0] += (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % mod
    dp[i][1] += (dp[i - 1][0] + dp[i - 1][2]) % mod
    dp[i][2] += (dp[i - 1][0] + dp[i - 1][1]) % mod
  }
  return (dp[n][0] + dp[n][1] + dp[n][2]) % mod
}

console.log(solution(+N))