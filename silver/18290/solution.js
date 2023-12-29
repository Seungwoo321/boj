const filePath = require('path').join(__dirname, 'input');
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(row => row.split(' ').map(Number));

function solution (n, m, k, grid) {
    if (k === 1) {
        return Math.max.apply(null, grid.map(row => Math.max.apply(null, row)));
    }
    const visited = Array.from({ length: n }, () => new Array(m).fill(0));
    const check = (y, x) => visited[y][x] || visited[y - 1]?.[x] || visited[y + 1]?.[x] || visited[y][x - 1] || visited[y][x + 1]
    const dfs = (start, depth, tmp) => {
        if (depth === k) {
            return tmp.reduce((acc, cur) => acc + cur, 0);
        }
        let result = -10000 * k;
        for (let i = start; i < n; i ++) {
            for (let j = 0; j < m; j ++) {
                if (check(i, j)) continue;
                visited[i][j] = 1;
                tmp.push(grid[i][j]);
                result = Math.max(dfs(i, depth + 1, tmp), result);
                tmp.pop();
                visited[i][j] = 0;
            }
        }
        return result;
    }
    return dfs(0, 0, []);
}

console.log(solution(...num, arr))

// test
function run (input) {
    const [num, ...arr] = input
        .toString()
        .trim()
        .split('\n')
        .map(row => row.trim().split(' ').map(Number));
    return solution(...num, arr);
}
module.exports = {
    run
}