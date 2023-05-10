const filePath = require('path').join(__dirname, 'input');
const [nums, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, m, t] = nums.split(' ').map(Number);
const discs = arr.slice(0, n).map(r => r.split(' ').map(Number));
const commands = arr.slice(n).map(r => r.split(' ').map(Number));
function solution (n, m, t, discs, commands) {
    const visited = Array.from({ length: n }, () => new Array(m).fill(0));
    const distance = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const rotate = (i, d, k) => {
        while (k--) {
            if (d) discs[i].push(discs[i].shift());
            else discs[i].unshift(discs[i].pop());
        }
    }
    const findAdjSameNumber = (start, flag) => {
        const queue = [start];
        while (queue.length) {
            const [y, x, v] = queue.shift();
            for (let [dy, dx] of distance) {
                const [ny, nx] = [y + dy, (x + dx + m) % m];
                if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
                if (visited[ny][nx]) continue;
                if ((v === discs[ny][nx]) && v > 0) {
                    visited[ny][nx] = 1;
                    if (!flag) flag = true;
                    queue.push([ny, nx, discs[ny][nx]]);
                    discs[ny][nx] = 0;
                }
            }
        }
        return flag;
    }
    const isNotAdjSmaeNumber = () => {
        let sum = 0;
        let count = 0;
        discs.forEach(row => {
            row.forEach(value => {
                if (value > 0) {
                    sum += value;
                    count ++;
                }
            })
        });
        const avg = sum / count;
        discs.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value === 0 || value == avg) return;
                if (value > avg) discs[y][x] -= 1;
                else discs[y][x] += 1;
            })
        })
    }
    for (let i = 0; i < t; i ++) {
        const [disc, d, k] = commands[i];
        visited.forEach(row => row.fill(0));
        let isAdjSame = false;
        for (let j = disc - 1; j < n; j += disc) {
            rotate(j, d, k);
        }
        for (let y = 0; y < n; y++) {
            for (let x = 0; x < m; x++) {
                if (visited[y][x]) continue;
                isAdjSame = findAdjSameNumber([y, x, discs[y][x]], isAdjSame);
            }
        }
        if (!isAdjSame) isNotAdjSmaeNumber();
    }
    return discs.reduce((acc, cur) => acc + cur.reduce((subAcc, subCur) => subAcc + subCur, 0), 0);
}
console.log(solution(n, m, t, discs, commands));