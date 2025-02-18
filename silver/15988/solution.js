const filePath = require('path').join(__dirname, 'input')
const [n, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
function solution (n, nums) {
  const answer = []
  const max = Math.max.apply(null, nums)
  const dp = new Array(max + 1).fill(0)
  const mod = 1000000009
  dp[1] = 1
  dp[2] = 2
  dp[3] = 4
  for (let i = 4; i <= max; i ++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % mod
  }
  for (let i = 0; i < n; i ++) {
    const m = nums[i]
    answer.push(dp[m])
  }
  return answer.join('\n')
}
console.log(solution(+n, arr.map(Number)))