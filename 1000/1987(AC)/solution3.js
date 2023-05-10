// const filePath = '/dev/stdin';
const filePath = './input'
const [nums, ...grid] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [r, c] = nums.split(' ').map(Number);
function solution(r, c, grid) {
    let result = 1;
    const distance = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const visited = new Array(26).fill(0);
    visited[grid[0][0]] = 1;
    const dfs = ([y, x], count) => {
        for (let [dy, dx] of distance) {
            const ny = dy + y;
            const nx = dx + x;
            if (0 <= ny && ny < r && 0 <= nx && nx < c && !visited[grid[ny][nx]]) {
                visited[grid[ny][nx]]++;
                result = Math.max(result, count + 1);
                dfs([ny, nx], count + 1);
                visited[grid[ny][nx]]--;
            }
        }
    }
    dfs([0, 0], 1);
    return result;
}
console.log(solution(r, c, grid.map(r => r.split('').map(v => v.charCodeAt(0) - 65))));