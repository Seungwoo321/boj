const filePath = require('path').join(__dirname, 'input')
const n = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()

function solution (n) {
  const dp = Array.from({ length: n + 1 }, (_, i) => i)
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= Math.sqrt(i); j ++) {
      dp[i] = Math.min(dp[i], dp[i - (j * j)] + 1)
    }
  }
  return dp[n]
}
console.log(solution(+n))