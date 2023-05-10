const filePath = require('path').join(__dirname, 'input');
const [nums, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, m] = nums.split(' ');
function solution (n, m, arr) {
    const distance = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const cctv = [];
    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < m; j ++) {
            const num = arr[i][j];
            if (num !== 0 && num !== 6) {
                cctv.push([i, j]);
            }
        }
    }
    const watchOffice = (queue, [dy, dx], office) => {
        let [y, x] = queue;
        while (true) {
            const [ny, nx] = [y + dy, x + dx];
            if (ny < 0 || ny >= n || nx < 0 || nx >= m) break;
            if (office[ny][nx] === 6) break;
            if (office[ny][nx] === 0) {
                office[ny][nx] = '#';
            }
            [y, x] = [ny, nx];
        }
    }
    const monitoring = (pos, num, d, office) => {
        watchOffice(pos, distance[d], office);
        if (num === 2) {
            watchOffice(pos, distance[(d + 2) % 4], office);
        } else if (num === 3) {
            watchOffice(pos, distance[(d + 1) % 4], office);
        } else if (num === 4) {
            watchOffice(pos, distance[(d + 1) % 4], office);
            watchOffice(pos, distance[(d + 2) % 4], office);
        } else if (num === 5) {
            watchOffice(pos, distance[(d + 1) % 4], office);
            watchOffice(pos, distance[(d + 2) % 4], office);
            watchOffice(pos, distance[(d + 3) % 4], office);
        }
        return office;
    }
    const lastIndex = d => d === 2 ? 2 : (d === 5 ? 1 : 4);
    const dfs = (size, index, office) => {
        if (size === index) {
            return office.reduce((acc, cur) => cur.filter(v => v === 0).length + acc, 0);
        }
        let result = Infinity;
        const [y, x] = cctv[index];
        const num = office[y][x];
        const end = lastIndex(num);
        for (let i = 0; i < end; i ++) {
            const newOffice = monitoring(cctv[index], num, i, office.map(r => [...r]));
            result = Math.min(result, dfs(size, index + 1, newOffice));
        }
        return result;
    }
    return dfs(cctv.length, 0, arr);
}
console.log(solution(+n, +m, arr.map(r => r.split(' ').map(Number))));