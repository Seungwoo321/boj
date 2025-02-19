const filePath = require('path').join(__dirname, 'input')
const N = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()

function solution (n) {
  const dp = [1, 3]
  const mod = 9901
  for (let i = 2; i <= n; i ++) {
    dp.push((2 * (dp[i - 1]) + dp[i - 2]) % mod)
  }
  return dp[n]
}

console.log(solution(+N))