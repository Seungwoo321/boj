const filePath = require('path').join(__dirname, 'input');
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [m, n, k] = num.split(' ').map(Number);
function solution (m, n, k, arr) {
    const distance = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const grid = Array.from({ length: m }, () => new Array(n).fill(0));
    for (let i = 0; i < arr.length; i ++) {
        const [x1, y1, x2, y2] = arr[i].split(' ').map(Number);
        for (let r = y1; r < y2; r++) {
            for (let c = x1; c < x2; c++) {
                grid[r][c] = 1;
            }
        }
    }
    const bfs = (queue) => {
        let i = 0;
        while (i < queue.length) {
            const [y, x] = queue[i++];
            for (const [dy, dx] of distance) {
                const [ny, nx] = [dy + y, dx + x];
                if (ny < 0 || ny >= m || nx < 0 || nx >= n) continue;
                if (grid[ny][nx]) continue
                grid[ny][nx] = 1;
                queue.push([ny, nx]);
            }
        }
        return queue.length;
    }
    const answer = [];
    for (let i = 0; i < m; i ++) {
        for (let j = 0; j < n; j ++) {
            if (grid[i][j]) continue
            grid[i][j] = 1;
            answer.push(bfs([[i, j]]));
        }
    }
    return answer.length + '\n' + answer.sort((a, b) => a - b).join(' ');
}
console.log(solution(m, n, k, arr));