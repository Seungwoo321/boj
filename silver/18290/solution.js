const filePath = require('path').join(__dirname, 'input');
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(row => row.split(' ').map(Number));

function solution (n, m, k, grid) {
    const visited = Array.from({ length: n }, () => new Array(m).fill(0));
    const distance = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    
    const result = [];
    const dfs = ([y, x], depth, tmp) => {

        if (depth === k) {
            // return tmp.reduce(sum, 0);
            result.push(tmp.slice())
            return
        }
        
        for (let i = y; i < n; i ++) {
            for (let j = x; j < m; j ++) {
                if (visited[i][j]) continue;
                for (let [dy, dx] of distance) {
                    const [ny, nx] = [dy + i, dx + j];
                    if (ny === y || nx === x) {

                    }
                }
                visited[i][j] = 1;
                tmp.push(grid[i][j]);
                dfs([i, j], depth + 1, tmp);
                tmp.pop();
                visited[i][j] = 0;
            }
        }
    }
    dfs([0, 0], 0, []);
    return result
}

console.log(solution(...num, arr))


