// const filePath = '/dev/stdin';
const filePath = './input'
const [nums, ...grid] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [r, c] = nums.split(' ').map(Number);
function solution(r, c, grid) {
    const distance = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const visited = new Array(26).fill(0);
    function dfs ([y, x], count, result) {
        visited[grid[y][x]]++;
        for (let [dy, dx] of distance) {
            const [ny , nx] = [dy + y, dx + x];
            if (ny < 0 || ny >= r || nx < 0 || nx >= c || visited[grid[ny][nx]]) continue;
            result = Math.max(count + 1, dfs([ny, nx], count + 1, result));
        }
        visited[grid[y][x]]--;
        return result;
    }
    return dfs([0, 0], 1, 1);
}
console.log(solution(r, c, grid.map(r => r.split('').map(v => v.charCodeAt(0) - 65))));