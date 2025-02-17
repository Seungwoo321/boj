const filePath = require('path').join(__dirname, 'input')
const n = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()

function solution (n) {
  const dp = new Array(n + 1).fill(0)
  dp[1] = 1n
  dp[2] = 1n
  for (let i = 3; i <= n; i ++) {
    dp[i] = dp[i - 2] + dp[i - 1]
  }
  return dp[n].toString()
}
console.log(solution(+n))