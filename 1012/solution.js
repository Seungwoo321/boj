const filePath = require('path').join(__dirname, 'input');
const [t, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (t, arr) {
    const distance = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let i = 0;
    let answer = [];
    while (t--) {
        const [m, n, c] = arr[i++].split(' ').map(Number)
        const data = arr.slice(i, c + i).map(pos => pos.split(' ').map(Number));
        let count = 0;
        const land = Array.from({ length: m }, () => new Array(n).fill(0));
        data.forEach(([y, x]) => land[y][x] = 1);
        data.forEach(([y, x]) => {
            if (!land[y][x]) return;
            land[y][x] = 0;
            count ++;
            let j = 0;
            const queue = [[y, x]];
            while (j < queue.length) {
                const [y, x] = queue[j++];
                for (const [dy, dx] of distance) {
                    const [ny, nx] = [dy + y, dx + x];
                    if (ny < 0 || ny >= m || nx < 0 || nx >= n) continue;
                    if (!land[ny][nx]) continue;
                    if (land[ny][nx]) {
                        land[ny][nx] = 0;
                        queue.push([ny, nx]);
                    }
                }
            }
        });
        answer.push(count);
        i += +c;
    }
    return answer.join('\n');
}
console.log(solution(+t, arr));
