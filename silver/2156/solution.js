const filePath = require('path').join(__dirname, 'input')
const [n, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
function solution (n, wine) {
  const dp = new Array(n).fill(0)
  dp[0] = wine[0]
  dp[1] = wine[0] + wine[1]
  for (let i = 2; i < n; i ++) {
    dp[i] = Math.max(
      dp[i - 1],
      dp[i - 2] + wine[i],
      (dp[i - 3] || 0) + wine[i - 1] + wine[i]
    )
  }
  return dp[n - 1]
}
console.log(solution(+n, arr.map(Number)))