const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const k = +arr.shift();
const kArr = arr.splice(0, k);
const l = +arr.shift();
function solution (n, k, kArr, l, lArr) {
    const visited = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let i = 0; i < k; i ++) {
        const [y, x] = kArr[i].split(' ');
        visited[y - 1][x - 1] = 2;
    }
    const cMap = { L: 1, D: 3 }
    const directions = [[0, 1], [-1, 0], [0, -1], [1, 0]];
    const dequeue = [[0, 0]];
    let i = 0;
    let j = 0;
    let time = 0;
    while (dequeue.length) {
        time++;
        const [y, x] = dequeue[0];
        const [dy, dx] = directions[i];
        const [ny, nx] = [dy + y, dx + x];
        if (ny < 0 || ny >= n || nx < 0 || nx >= n || visited[ny][nx] === 1) break;
        if (visited[ny][nx] === 2) {
            visited[ny][nx] = 0;
        } else {
            const [ty, tx] = dequeue.pop();
            visited[ty][tx] = 0;
        }
        visited[ny][nx] = 1;
        dequeue.unshift([ny, nx]);
        // console.log(visited.map(r => r.join(' ')).join('\n'))
        // console.log()
        if (j < l) {
            const [t, c] = lArr[j].split(' ')
            if (time === +t) {
                i = (i + cMap[c]) % 4;
                j++;
            }
        }
    }
    return time;
}
console.log(solution(+n, k, kArr, l, arr));
