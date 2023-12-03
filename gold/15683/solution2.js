const filePath = require('path').join(__dirname, 'input');
const [nums, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, m] = nums.split(' ');
function solution(n, m, arr) {
    const distance = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const cctv = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const num = arr[i][j];
            if (num !== 0 && num !== 6) {
                cctv.push([i, j]);
            }
        }
    }
    const watchOffice = (pos, [dy, dx]) => {
        const queue = []
        let [y, x] = pos;
        while (true) {
            const [ny, nx] = [y + dy, x + dx];
            if (ny < 0 || ny >= n || nx < 0 || nx >= m) break;
            if (arr[ny][nx] === 6) break;
            y = ny;
            x = nx;
            if (arr[ny][nx] === 0) {
                queue.push([y, x]);
                arr[ny][nx] = '#';
            }            
        }
        return queue
    }
    const monitoring = (pos, num, d) => {
        let queue = [];
        queue = [...watchOffice(pos, distance[d])]
        if ([2, 4, 5].includes(num)) {
            queue = [...queue, ...watchOffice(pos, distance[(d + 2) % 4])];
        }
        if ([3, 4, 5].includes(num)) {
            queue = [...queue, ...watchOffice(pos, distance[(d + 1) % 4])];
        }
        if (num === 5) {
            queue = [...queue, ...watchOffice(pos, distance[(d + 3) % 4])];
        }
        return queue;
    }
    const lastIndex = d => d === 2 ? 2 : (d === 5 ? 1 : 4);
    const dfs = (size, index) => {
        if (size === index) {
            return arr.reduce((acc, cur) => cur.filter(v => v === 0).length + acc, 0);
        }
        let result = Infinity;
        const [y, x] = cctv[index];
        const num = arr[y][x];
        const end = lastIndex(num);
        for (let i = 0; i < end; i++) {
            const queue = monitoring(cctv[index], num, i);
            result = Math.min(result, dfs(size, index + 1));
            queue.forEach(([y, x]) => arr[y][x] = 0);
        }
        return result;
    }
    return dfs(cctv.length, 0);
}
console.log(solution(+n, +m, arr.map(r => r.split(' ').map(Number))));