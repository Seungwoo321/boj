const filePath = require('path').join(__dirname, 'input');
const [T, ...nums] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
function solution (nums) {
  const n = Math.max.apply(null, nums)
  const dp = Array.from({ length: n + 1}, () => new Array(4).fill(0));
  dp[1][1] = 1;
  dp[2][2] = 1;
  dp[3][3] = 1;
  const memoization = () => {
    for (let i = 3; i <= n; i ++) {
      dp[i][1] += dp[i - 1][2] + dp[i - 1][3] % 1000000009;
      dp[i][2] += dp[i - 2][1] + dp[i - 2][3] % 1000000009;
      dp[i][3] += dp[i - 3][1] + dp[i - 3][2] % 1000000009;
    }
  }
  memoization(n);
  const answers = nums.map(n => (dp[n][1] + dp[n][2] + dp[n][3]) % 1000000009);
  return answers.join('\n');
}
console.log(solution(nums.map(Number)));