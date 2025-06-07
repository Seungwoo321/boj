const filePath = require('path').join(__dirname, 'input')
const N = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()

function solution (m) {
  const dp = Array.from({ length: m + 1}, () => new Array(10).fill(1))
  dp[0] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  for (let n = 1; n < m; n ++) {
    for (let l = 1; l < 10; l ++) {
      dp[n][l] = (dp[n][l - 1]+ dp[n - 1][l]) % 10007
    }
  }
  return dp[m - 1][9]
}

console.log(solution(+N))