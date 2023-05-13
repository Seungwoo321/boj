const filePaht = './input';
const [N, ...arr] = require('fs')
    .readFileSync(filePaht)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    const visited = Array.from({ length: n }, () => new Array(n).fill(0));
    const distance = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const bfs = (y, x) => {
        const queue = [[y, x]]
        let i = 0;
        let count = 1;
        while (i < queue.length) {
            const [y1, x1] = queue[i++]
            for (const [dy, dx] of distance) {
                const ny = dy + y1;
                const nx = dx + x1;
                if (ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
                if (visited[ny][nx]) continue;
                if (arr[ny][nx] === '1') {
                    visited[ny][nx] = 1;
                    count ++
                    queue.push([ny, nx]);
                }
            }
        }
        return count;
    }
    const answer = [];
    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < n; j ++) {
            if (visited[i][j]) continue;
            if (arr[i][j] === '1') {
                visited[i][j] = 1;
                answer.push(bfs(i, j));
            }
        }
    }
    // console.log(visited.map(r => r.join('')).join('\n'));
    return answer.length + '\n' + answer.sort((a, b) => a - b).join('\n');
}
console.log(solution(+N, arr));