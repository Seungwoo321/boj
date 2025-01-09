const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
function solution (n, w) {
  const dp = Array.from({ length: n }, () => new Array(1 << n).fill(-1));
  const dfs = (city, visited) => {
    if (visited === (1 << n) - 1) {
      return w[city][0] || Infinity;
    }
    if (dp[city][visited] !== -1) {
      return dp[city][visited];
    }
    let result = Infinity
    for (let nextCity = 0; nextCity < n; nextCity ++) {
      if (visited & (1 << nextCity)) continue;
      if (w[city][nextCity] === 0) continue;
      result = Math.min(
        result,
        w[city][nextCity] + dfs(nextCity, visited | (1 << nextCity))
      );
    }
    dp[city][visited] = result;
    return dp[city][visited];
  }
  return dfs(0, 1);
}
console.log(solution(+n, arr.map(r => r.split(' ').map(Number))));