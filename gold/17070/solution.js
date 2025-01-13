const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution (n, grid) {
  const dp = Array.from({ length: n }, 
    () => Array.from({ length: n },
      () => new Array(3).fill(0))
  );
  const connectable = (y, x, d) => {
    if (y < 0 || y >= n || x < 0 || x >= n) return false;
    if (d === 0 || d === 2) {
      return !grid[y][x];
    } else {
      return grid[y][x] === 0 && grid[y - 1][x] === 0 && grid[y][x - 1] === 0;
    }
  }
  dp[0][1][0] = 1;
  for (let i = 0; i < n; i ++) {
    for (let j = 1; j < n; j ++) {
      // 가로 -> 가로
      if (connectable(i, j + 1, 0)) {
        dp[i][j + 1][0] += dp[i][j][0];
      }
      // 가로 -> 대각선
      if (connectable(i + 1, j + 1, 1)) {
        dp[i + 1][j + 1][1] += dp[i][j][0];
      }
      // 대각선 -> 가로
      if (connectable(i, j + 1, 0)) {
        dp[i][j + 1][0] += dp[i][j][1];
      }
      // 대각선 -> 대각선
      if (connectable(i + 1, j + 1, 1)) {
        dp[i + 1][j + 1][1] += dp[i][j][1];
      }
      // 대각선 -> 세로
      if (connectable(i + 1, j, 2)) {
        dp[i + 1][j][2] += dp[i][j][1];
      }
      // 세로 -> 대각선
      if (connectable(i + 1, j + 1, 1)) {
        dp[i + 1][j + 1][1] += dp[i][j][2];
      }
      // 세로 -> 세로
      if (connectable(i + 1, j, 2)) {
        dp[i + 1][j][2] += dp[i][j][2];
      }
    }
  }
  return dp[n - 1][n - 1][0] + dp[n - 1][n - 1][1] + dp[n - 1][n - 1][2];
}
console.log(solution(+n, arr.map(r => r.split(' ').map(Number))));