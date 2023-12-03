const filePath = require('path').join(__dirname, 'input');
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, m] = num.split(' ').map(Number);
function solution (n, m, arr) {
    const distance = [[1, 0], [0, -1], [-1, 0], [0, 1]];
    const visited = Array.from({ length: n }, () => new Array(m).fill(0));
    const maxValue = arr.reduce((acc, cur) => Math.max(...cur, acc), 0);
    const dfs = (y, x, depth, sum, result) => {
        if (sum + maxValue * (4 - depth) <= result || depth === 4) {
            return Math.max(sum, result);
        }
        for (let [dy, dx] of distance) {
            const [ny, nx] = [dy + y, dx + x];
            if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
            if (visited[ny][nx]) continue;
            visited[ny][nx] = 1;
            if (depth === 2) result = dfs(y, x, depth + 1, sum + arr[ny][nx], result);
            result = dfs(ny, nx, depth + 1, sum + arr[ny][nx], result);
            visited[ny][nx] = 0;
        }
        return result;
    }
    let answer = 0;
    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < m; j ++) {
            visited[i][j] = 1;
            answer = Math.max(dfs(i, j, 1, arr[i][j], arr[i][j]), answer);
            visited[i][j] = 0;
        }
    }
    return answer;
}
console.log(solution(n, m, arr.map(r => r.split(' ').map(Number))));

module.exports = {
    solution
};