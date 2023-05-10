// const filePath = '/dev/stdin';
const filePath = './input';
const [n, ...grid] = require('fs').readFileSync(filePath).toString().trim().split('\n');
function solution (n, grid) {
    const visited = Array.from({ length: n }, () => new Array(n).fill(0));
    const distance = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    function dfs(depth, sum, minCost) {
        if (depth === 3) return Math.min(sum, minCost);
        for (let i = 1; i < n - 1; i++) {
            for (let j = 1; j < n - 1; j++) {
                if (!visited[i][j] && distance.every(([dy, dx]) => !visited[dy + i][dx + j])) {
                    let cost = grid[i][j];
                    visited[i][j] = 1;
                    distance.forEach(([dy, dx]) => { visited[dy + i][dx + j] = 1; cost += grid[dy + i][dx + j] });
                    minCost = dfs(depth + 1, sum + cost, minCost);
                    visited[i][j] = 0;
                    distance.forEach(([dy, dx]) => visited[dy + i][dx + j] = 0);
                }
            }
        }
        return minCost;
    }
    return dfs(0, 0, Infinity);
}
console.log(solution(Number(n), grid.map(v => v.split(' ').map(Number))));