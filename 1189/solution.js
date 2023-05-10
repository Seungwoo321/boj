// const filePath = '/dev/stdin';
const filePath = './input';
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [nums, ...grid] = input;

function solution (r, c, k, grid) {
    const visited = Array.from({ length: r }, () => new Array(c).fill(0));
    const distance = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    visited[r - 1][0] = 1;
    function bfs ([y, x], count) {
        if (y === 0 && x === c - 1) {
            console.log()
            console.log(visited.map(r => r.join(' ')).join('\n'));
            return visited[y][x] === k ? 1 : 0;
        }
        for (let [dy, dx] of distance) {
            const ny = dy + y;
            const nx = dx + x;
            if (ny < 0 || ny >= r || nx < 0 || nx >= c) continue;
            if (visited[ny][nx] || grid[ny][nx] === 'T') continue;
            if (visited[y][x] + 1 > k) continue;
            visited[ny][nx] = visited[y][x] + 1;
            count += bfs([ny, nx], 0);
            visited[ny][nx] = 0;
        }
        return count;
    }
    return bfs([r - 1, 0], 0);
}
console.log(solution(...nums.split(' ').map(Number), grid));