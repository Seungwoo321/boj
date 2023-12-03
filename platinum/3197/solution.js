/**
 * 내부 함수에서 지역 변수 대신 글로벌 변수 사용
 * 큐에서 꺼낼 때 shift() 대신 index 로 접근
 */
// const filePath = '/dev/stdin';
const filePath = './input'
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .split('\n');
const [row, col] = input[0].split(' ');
function solution(r, c, grid) {
    const distance = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const visitedSwan = Array.from({ length: r }, () => new Array(c).fill(0));
    const visitedIce = Array.from({ length: r }, () => new Array(c).fill(0));
    let meetSwan = [];
    let waters = [];
    let swans = [];
    for (let i = 0; i < r; i++) {
        grid[i] = grid[i].split('');
        for (let j = 0; j < c; j++) {
            if (grid[i][j] === 'L') {
                if (swans.length) {
                    meetSwan.push(i);
                    meetSwan.push(j);
                } else {
                    visitedSwan[i][j] = 1;
                    swans.push([i, j])
                }
                grid[i][j] = '.';
            }
            if (grid[i][j] === '.') {
                visitedIce[i][j] = 1;
                waters.push([i, j]);

            }
        }
    }
    let day = 0;
    while (true) {
        let wIndex = 0;
        const nextWaters = [];
        while (wIndex < waters.length) {
            const [y, x] = waters[wIndex++];
            for (let [dy, dx] of distance) {
                const ny = y + dy;
                const nx = x + dx;
                if (!(ny in grid) || !(nx in grid[0]) || visitedIce[ny][nx]) continue;
                if (grid[ny][nx] === '.') {
                    waters.push([ny, nx])
                } else {
                    grid[ny][nx] = '.';
                    nextWaters.push([ny, nx]);
                }
                visitedIce[ny][nx] = 1;
            }
        }
        day++;
        let sIndex = 0;
        const nextSwans = [];
        while (sIndex < swans.length) {
            const [y, x] = swans[sIndex++];
            if (meetSwan[0] === y && meetSwan[1] === x) return day;
            for (let [dy, dx] of distance) {
                const ny = y + dy;
                const nx = x + dx;
                if (!(ny in grid) || !(nx in grid[0]) || visitedSwan[ny][nx]) continue;
                if (grid[ny][nx] === '.') {
                    swans.push([ny, nx]);
                } else {
                    nextSwans.push([ny, nx]);
                }
                visitedSwan[ny][nx] = 1;
            }
        }
        swans = nextSwans;
        waters = nextWaters;
    }
}
console.log(solution(parseInt(row), parseInt(col), input.slice(1)));