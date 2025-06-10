const filePath = require('path').join(__dirname, 'input')
const [n, arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

function solution (m, nums) {
  const dp = nums.slice()
  for (let i = 0; i < m; i ++) {
    // let maxNum = 0
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // maxNum = Math.max(maxNum, dp[j])
        dp[i] = Math.max(dp[i], nums[i] + dp[j]) 
      }
    }
    // dp[i] = dp[i] + Math.max(maxNum, 0)
  }
  return Math.max(...dp)
}
console.log(solution(+n, arr.split(' ').map(Number)))