const [nums, ...arr] = require('fs').readFileSync('./input').toString().trim().split('\n');
const [r, c] = nums.split(' ').map(Number);
const map = arr.map(r => r.split('').map(v => v.charCodeAt(0) - 64));
const code = (y, x) => (1 << map[y][x]);
const distance = [[-1, 0], [0, 1], [1, 0], [0, -1]];
function dfs(y, x, count, result, sum) {
    return distance.reduce((acc, cur) => {
        const [ny, nx] = [cur[0] + y, cur[1] + x];
        if (ny < 0 || ny >= r || nx < 0 || nx >= c || sum + code(y, x) & code(ny, nx)) return acc;
        return Math.max(count + 1, dfs(ny, nx, count + 1, acc, sum + code(y, x)));
    }, result);
}
console.log(dfs(0, 0, 1, 1, 0));