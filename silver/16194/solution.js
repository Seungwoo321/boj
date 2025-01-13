const filePath = require('path').join(__dirname, 'input');
const [n, arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
function solution (n, packs) {
  const dp = [0, ...packs];
  for (let i = 1; i <= n; i ++) {
    for (let j = 1; j < i; j ++) {
      dp[i] = Math.min(dp[i], dp[i - j] + packs[j - 1]);
    }
  }
  return dp[n];
}
console.log(solution(+n, arr.split(' ').map(Number)));