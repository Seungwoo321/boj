const input = require('fs').readFileSync('./input').toString().trim().split("\n");
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [row, col] = input.shift().split(' ').map(v => Number(v));
solution(row, col, input);

// 3-B 백준 보물섬
/**
 * 각 육지에서 다른 육지까지의 모든 최단거리 중 최대값 구하기
 * @param {Number} r 
 * @param {Number} c 
 * @param {Array[]} grid 
 */
function solution(r, c, grid) {

    const bfs = (position, grid, maxDiff) => {
        const n = grid.length;
        const m = grid[0].length
        const visited = Array.from({ length: n }).map(v => new Array(m).fill(0));
        const queue = [position]
        visited[position[0]][position[1]] = 1
        const move = [[-1, 0], [0, 1], [1, 0], [0, -1]];
        while (queue.length) {
            const [y, x] = queue.shift();
            maxDiff = Math.max(maxDiff, visited[y][x]);
            for (let i = 0; i < move.length; i++) {
                const [dy, dx] = move[i];
                const ny = y + dy;
                const nx = x + dx;
                if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
                if (visited[ny][nx] || grid[ny][nx] === 'W') continue;
                visited[ny][nx] = visited[y][x] + 1;
                queue.push([ny, nx]);
                
            }
        }
        return maxDiff - 1;
    }
    let maxDiff = 0;
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (grid[i][j] === 'L') {
                maxDiff = Math.max(maxDiff, bfs([i, j], grid, maxDiff));
            }
        }
    }
    console.log(maxDiff);
}

