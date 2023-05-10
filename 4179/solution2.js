// const filePath = '/dev/stdin';
const filePath = './input';
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [row, col] = input[0].split(' ').map(v => +v);
const map = input.slice(1);
console.log(solution(row, col, map));

function solution(row, col, map) {
    map = map.map(r => r.split(''));
    const distance = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const queue = [];
    let py = 0;
    let px = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (map[i][j] === 'F') {
                queue.push([i, j, -1])
            }
            if (map[i][j] === 'J') {
                py = i;
                px = j;
            }
        }
    }
    queue.push([py, px, 0]);

    while (queue.length) {
        const [y, x, time] = queue.shift();
        for (let [dy, dx] of distance) {
            const ny = dy + y;
            const nx = dx + x;
            if (ny < 0 || ny >= row || nx < 0 || nx >= col) {
                if (time < 0) continue;
                return time + 1;
            }
            if (map[ny][nx] !== '.') continue;
            map[ny][nx] = '#';
            queue.push([ny, nx, time < 0 ? -1 : time + 1]);
        }
    }
    return 'IMPOSSIBLE';
}