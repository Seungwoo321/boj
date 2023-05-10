const filePath = require('path').join(__dirname, 'input');
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, m] = num.split(' ');
function solution (n, m, arr) {
    const visited = Array.from({ length: n }, () => new Array(m).fill(0));
    const distance = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const queue = [[0, 0]];
    visited[0][0] = 1;
    let i = 0;
    while (i < queue.length) {
        const [y, x] = queue[i++];
        for (let [dy, dx] of distance) {
            const [ny, nx] = [dy + y, dx + x];
            if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
            if (visited[ny][nx]) continue;
            if (arr[ny][nx] === '1') {
                visited[ny][nx] += visited[y][x] + 1;
                queue.push([ny, nx]);
            }
        }
    }
    return visited[n - 1][m - 1];
}
console.log(solution(+n, +m, arr))