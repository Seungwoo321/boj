const [nums, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [r, c] = nums.split(' ').map(Number);
const map = arr.map(r => r.split('').map(v => v.charCodeAt(0) - 64));
const code = (y, x) => (1 << map[y][x]);
const distance = [[-1, 0], [0, 1], [1, 0], [0, -1]];
function dfs(y, x, count, result, sum) {
    for (let [dy, dx] of distance) {
        const [ny, nx] = [dy + y, dx + x];
        if (ny < 0 || ny >= r || nx < 0 || nx >= c) continue;
        if (sum + code(y, x) & code(ny, nx)) continue;
        result = Math.max(count + 1, dfs(ny, nx, count + 1, result, sum + code(y, x)));
    }
    return result;
}
console.log(dfs(0, 0, 1, 1, 0));