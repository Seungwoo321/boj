// const filePath = '/dev/stdin';
const filePath = './input';
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
let [y1, x1, y2, x2] = input[1].split(' ').map(Number);
const grid = input.slice(2).map(v => v.split(''));
console.log(solution([--y1, --x1], [--y2, --x2], grid));
function solution([y1, x1], [y2, x2], grid) {
    const n = grid.length;
    const m = grid[0].length;
    const position = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const visited = Array.from({ length: n }).map(v => new Array(m).fill(0));
    visited[y1][x1] = 1;
    let queue = [1000 * y1 + x1];
    let count = 0;
    while (grid[y2][x2] !== '0') {
        count ++;
        const tempQ = [];
        while (queue.length) {
            const num = queue.shift();
            const y = parseInt(num / 1000);
            const x = num % 1000;
            for (let [dy, dx] of position) {
                const ny = dy + y;
                const nx = dx + x;
                if (ny < 0 || ny >= n || nx < 0 || nx >= m || visited[ny][nx]) continue;
                visited[ny][nx] = count
                if (grid[ny][nx] !== '0') {
                    grid[ny][nx] = '0';
                    tempQ.push(1000 * ny + nx);
                } else {
                    queue.push(1000 * ny + nx);
                }
            }
        }
        queue = tempQ;
    }
    return visited[y2][x2];
}