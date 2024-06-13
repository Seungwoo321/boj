const filePath = require('path').join(__dirname, 'input');
const [N, ...W]  = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution (n, w) {
    const visited = new Array(n).fill(0);
    let min = Infinity;
    const dfs = (start, y, depth, sum) => {
        if (depth === n) {
            if (w[y][start] === 0) return;
            min = Math.min(min, sum + w[y][start])
            return;
        }
        for (let i = 1; i < n; i ++) {
            if (visited[i]) continue;
            if (w[y][i] === 0) continue;
            if (sum + w[y][i] > min) continue;
            visited[i] = 1;
            dfs(start, i, depth + 1, sum + w[y][i]);
            visited[i] = 0;
        }
    }
    dfs(0, 0, 1, 0);
    return min;
}

console.log(solution(
    +N,
    W.map(r => r.split(' ').map(c => +c))
));