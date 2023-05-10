const filePath = require('path').join(__dirname, 'input');
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, m] = num.split(' ');
function solution (n, m, arr) {
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const visited = Array.from({ length: n }, () => new Array(m).fill(0));
    const meltCheese = (queue, time) => {
        const remainingCheese = queue.length;
        const nextQueue = [];
        while (queue.length) {
            const [y, x] = queue.shift();
            for (let [dy, dx] of directions) {
                const [ny, nx] = [dy + y, dx + x];
                if (ny < 0 || ny >= n || nx < 0 || nx >= m || visited[ny][nx]) continue;
                visited[ny][nx] = 1;
                if (arr[ny][nx] === '0') {
                    queue.push([ny, nx]);
                } else {
                    nextQueue.push([ny, nx]);
                }
            }
        }
        if (nextQueue.length) return meltCheese(nextQueue, time + 1); 
        return [time, remainingCheese];
    }
    return meltCheese([[0, 0]], 0).join('\n');
}
console.log(solution(+n, +m, arr.map(r => r.split(' '))));