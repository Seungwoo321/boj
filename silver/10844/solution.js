const filePath = require('path').join(__dirname, 'input');
const n = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim();
function solution (n) {
  const mod = 1000000000;
  const dp = Array.from({ length: n + 1 }, () => new Array(10).fill(0));
  for (let i = 1; i <= 9; i ++) {
    dp[1][i] = 1;
  }
  for (let i = 2; i <= n; i ++) {
    for (let j = 0; j <= 9; j ++) {
      if (j > 0) {
        dp[i][j] += dp[i - 1][j - 1];
      }
      if (j < 9) {
        dp[i][j] += dp[i - 1][j + 1];
      }
      dp[i][j] %= mod;
    }
  }
  return dp[n].reduce((acc, cur) => acc + cur, 0) % mod;
}
console.log(solution(+n));