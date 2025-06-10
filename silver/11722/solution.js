const filePath = require('path').join(__dirname, 'input')
const [n, arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')

function solution (n, nums) {
  const dp = new Array(n).fill(1)

  for (let i = 0; i < n; i ++) {
    for (let j = 0; j < i; j ++) {
      if (nums[j] > nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp)
}

console.log(solution(+n, arr.split(' ').map(Number)))
