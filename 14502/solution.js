const filePath = require('path').join(__dirname, 'input');
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, m] = num.split(' ');
function solution (n, m, arr) {
    const emptyList = [];
    const virusList = [];
    const distance = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let visited = Array.from({ length: n }, () => new Array(m).fill(0));
    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < m; j ++) {
            if (arr[i][j] === 0) {
                emptyList.push([i, j]);
            }
            if (arr[i][j] === 2) {
                virusList.push([i, j])
            }
        }
    }
    const spreadVirusList = () => {
        visited = visited.map(r => r.fill(0));
        const queue = virusList.slice()
        while (queue.length) {
            const [y, x] = queue.pop();
            for (const [dy, dx] of distance) {
                const [ny, nx] = [dy + y, dx + x];
                if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
                if (visited[ny][nx] === 2 || arr[ny][nx] === 1) continue;
                visited[ny][nx] = 2;
                queue.push([ny, nx]);
            }
        }
        let count = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (visited[i][j] === 0 && arr[i][j] === 0) {
                    count++;
                }
            }
        }
        return count;
    }
    let area = 0;
    for (let i = 0; i < emptyList.length; i ++) {
        for (let j = 0; j < i; j ++) {
            for (let k = 0; k < j; k ++) {
                const [y1, x1] = emptyList[i];
                const [y2, x2] = emptyList[j];
                const [y3, x3] = emptyList[k];
                arr[y1][x1] = 1;
                arr[y2][x2] = 1;
                arr[y3][x3] = 1;
                area = Math.max(area, spreadVirusList());
                arr[y1][x1] = 0;
                arr[y2][x2] = 0;
                arr[y3][x3] = 0;
            }
        }
    }
    return area;
}
console.log(solution(+n, +m, arr.map(r => r.split(' ').map(Number))));
