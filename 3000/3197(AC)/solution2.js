// const filePath = '/dev/stdin';
const filePath = './input'
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .split('\n');
const [row, col] = input[0].split(' ').map(Number);

function solution(r, c, grid) {
    const distance = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const visitedSwan = Array.from({ length: r }, (v => new Array(c).fill(0)));
    const visitedIce = Array.from({ length: r }, (v => new Array(c).fill(0)));
    let waters = [];
    let swans = [];
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (grid[i][j] === 'L' && !swans.length) {
                visitedSwan[i][j] = 1;
                grid[i][j] = '.';
                swans.push([i, j, 0]);
            }
            if (grid[i][j] !== 'X') {
                waters.push([i, j, 0]);
            }
            if (grid[i][j] === '.') {
                grid[i][j] = 0;
            }
        }
    }
    while (waters.length) {
        const [y, x, day] = waters.shift();
        for (let [dy, dx] of distance) {
            const ny = y + dy;
            const nx = x + dx;
            if (!(ny in grid) || !(nx in grid[0]) || visitedIce[ny][nx]) continue;
            visitedIce[ny][nx] = 1;
            if (grid[ny][nx] === 'X') {
                grid[ny][nx] = day + 1;
                waters.push([ny, nx, day + 1]);
            }
        }
    }
    while (true) {
        const tempQ = [];
        while (swans.length) {
            const [y, x, time] = swans.shift();
            for (let [dy, dx] of distance) {
                const ny = y + dy;
                const nx = x + dx;
                if (!(ny in grid) || !(nx in grid[0])) continue;
                if (grid[ny][nx] === 'L') return time;
                if (visitedSwan[ny][nx]) continue;
                visitedSwan[ny][nx] = 1;
                if (grid[ny][nx] <= time) {
                    swans.push([ny, nx, time]);
                } else if (grid[ny][nx] === time + 1) {
                    tempQ.push([ny, nx, time + 1]);
                }
            }
        }
        swans = tempQ;
    }
}

console.log(solution(row, col, input.slice(1).map(v => v.split(''))));