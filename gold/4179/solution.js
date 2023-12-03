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
    const distance = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const canNotMoveFire = (y, x, map, fire) => map[y][x] === '#' || fire[y][x] !== Infinity;
    const canNotMovePerson = (y, x, map, person) => map[y][x] === '#' || person[y][x] !== 0
    const canEscapePerson = (y, x, row, col) => y === 0 || y === row - 1 || x === 0 || x === col - 1;
    const queue = [];
    const person = Array.from({ length: row }).map(v => new Array(col).fill(0));
    const fire = Array.from({ length: row }).map(v => new Array(col).fill(Infinity));
    let py = 0
    let px =  0
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (map[i][j] === 'F') {
                fire[i][j] = 1;
                queue.push([i, j])
            }
            if (map[i][j] === 'J') {
                py = i;
                px = j;
            }
        }
    }

    while (queue.length) {
        const [y, x] = queue.shift();
        for (let [dy, dx] of distance) {
            const ny = dy + y;
            const nx = dx + x;
            if (ny < 0 || ny >= row || nx < 0 || nx >= col) continue;
            if (canNotMoveFire(ny, nx, map, fire)) continue
            fire[ny][nx] = fire[y][x] + 1
            queue.push([ny, nx]);
        }
    }
    person[py][px] = 1;
    queue.push([py, px]);

    let result = 0;
    while (queue.length) {
        const [y, x] = queue.shift();
        if (canEscapePerson(y, x, row, col)) {
            result = person[y][x]
            break
        }
        for (let [dy, dx] of distance) {
            const ny = dy + y;
            const nx = dx + x;
            if (ny < 0 || ny >= row || nx < 0 || nx >= col) continue;
            if (canNotMovePerson(ny, nx, map, person)) continue;
            if (fire[ny][nx] <= person[y][x] + 1) continue;
            person[ny][nx] = person[y][x] + 1;
            queue.push([ny, nx]);
        }
    }
    return result || 'IMPOSSIBLE'

}