const filePath = require('path').join(__dirname, 'input')
const [N, ...cost] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

function solution (n, cost) {
  const dp = Array.from({ length: n }, () => new Array(2).fill(0))
  dp[0][0] = cost[0][0]
  dp[0][1] = cost[0][1]
  dp[0][2] = cost[0][2]
  for (let i = 1; i < n; i ++) {
    dp[i][0] = cost[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2])
    dp[i][1] = cost[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2])
    dp[i][2] = cost[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1])
  }
  return Math.min(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2])
}
console.log(solution(+N, cost.map(r => r.split(' ').map(Number))))