const filePath = require('path').join(__dirname, 'input')
const [n, arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

function solution (n, nums) {
  const dp = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i ++) {
    for (let j = 1; j <= i; j ++) {
      dp[i] = Math.max(dp[i - j] + nums[j - 1], dp[i])
    }
  }
  return dp[n]
}
console.log(solution(+n, arr.split(' ').map(v => +v)))