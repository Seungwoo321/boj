const filePath = require('path').join(__dirname, 'input');
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [r, c, t] = num.split(' ');
function solution (r, c, t, arr) {
    const top = {
        index: 0,
        distance: [[0, 1], [-1, 0], [0, -1], [1, 0]]
    }
    const bottom = {
        index: 0,
        distance: [[-1, 0], [0, 1], [1, 0], [0, -1]]
    }
    const airCleaner = [];
    for (let i = 2; i < r - 2; i++) {
        if (arr[i][0] === -1) {
            airCleaner.push(i);
            airCleaner.push(i + 1);
            break;
        }
    }
    const cleanToAir = ([y, x], [startRow, endRow], { index, distance }) => {
        let dust = 0;
        while (true) {
            const [dy, dx] = distance[index];
            const [ny, nx] = [dy + y, dx + x];
            if (ny < startRow || ny >= endRow || nx < 0 || nx >= c) {
                index = (index + 1) % 4;
                continue;
            }
            if (arr[ny][nx] === -1) break;
            [dust, arr[ny][nx]] = [arr[ny][nx], dust];
            [y, x] = [ny, nx];
        }
    }
    const spreadOfDust = () => {
        let queue = [];
        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (arr[i][j] > 0) {
                    queue.push([i, j, parseInt(arr[i][j] / 5)]);
                }
            }
        }
        let i = 0;
        const distance = [[0, 1], [-1, 0], [1, 0], [0, -1]];
        while (i < queue.length) {
            const [y, x, dust] = queue[i++];
            for (let [dy, dx] of distance) {
                const [ny, nx] = [dy + y, dx + x];
                if (ny < 0 || ny >= r || nx < 0 || nx >= c) continue;
                if (arr[ny][nx] === -1) continue;
                arr[ny][nx] += dust;
                arr[y][x] -= dust
            }
        }
    }
    for (let i = 0; i < t; i ++) {
        spreadOfDust();
        cleanToAir([airCleaner[0], 0], [0, airCleaner[0] + 1], top);
        cleanToAir([airCleaner[1], 0], [airCleaner[1], r], bottom);
    }
    return arr.reduce((acc, cur) => acc + cur.reduce((acc, cur) => acc + cur , 0), 2);
}
console.log(solution(+r, +c, +t, arr.map(r => r.split(' ').map(Number))));