const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    const maxLimit = Math.max(...arr.reduce((acc, cur) => acc.concat(cur)), []);
    const distance = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const visited = Array.from({ length: n }, () => new Array(n).fill(0));
    const bfs = (queue, limit) => {
        while (queue.length) {
            const [y, x] = queue.shift();
            for (const [dy, dx] of distance) {
                const [ny, nx] = [dy + y, dx + x];
                if (ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
                if (visited[ny][nx]) continue;
                if (arr[ny][nx] > limit) {
                    visited[ny][nx] = 1;
                    queue.push([ny, nx]);
                }
            }
        }
        
    }
    let maxSafeArea = 0;
    for (let limit = 0; limit <= maxLimit; limit ++) {
        let safeArea = 0;
        visited.forEach(v => v.fill(0));
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (visited[i][j]) continue;
                if (arr[i][j] <= limit) continue;
                visited[i][j] = 1;
                safeArea++;
                bfs([[i, j]], limit);
            }
        }
        maxSafeArea = Math.max(maxSafeArea, safeArea);
    }
    return maxSafeArea;
}
console.log(solution(+n, arr.map(r => r.split(' ').map(Number))));