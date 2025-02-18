const filePath = require('path').join(__dirname, 'input')
const [N, K] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')

function solution (N, K) {
  const dp = Array.from({ length: N + 1 }, (_, i) => new Array(K + 1).fill(0))
  dp[0][0] = 1
  
  for (let k = 1; k <= K; k ++) {
    for (let n = 0; n <= N; n ++) {
      for (let i = 0; i <= n; i ++) {
        dp[n][k] += dp[n - i][k - 1]
      }
      dp[n][k] %= 1000000000
    }
  }
  return dp[N][K]
}

console.log(solution(+N, +K))