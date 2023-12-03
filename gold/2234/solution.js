const filePath = './input';
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [N, M] = num.split(' ');

function solution (col, row, grid) {

    const components = [];
    const visited = Array.from({ length: row }, () => new Array(col).fill(0));
    const distance = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const answer = [0, 0, 0];

    const dfs = (y, x) => {
        if (visited[y][x]) return 0;
        visited[y][x] = components.length + 1;
        let roomSize = 1;
        for (let i in distance) {
            const ny = distance[i][0] + y;
            const nx = distance[i][1] + x;
            if (ny  < 0 || ny >= row || nx < 0 || nx >= col) continue;
            if (grid[ny][nx] & (1 << i)) continue;
            roomSize += dfs(ny, nx);
        }
        return roomSize;
    }

    for (let i = 0; i < row; i ++) {
        for (let j = 0; j < col; j ++) {
            if (visited[i][j]) continue;
            components.push(dfs(i, j));
        }
    }

    answer[0] = components.length;
    answer[1] = Math.max(...components);

    for (let i = 0; i < row; i ++) {
        for (let j = 0; j < col; j ++) {
            const id = visited[i][j] - 1;
            if (i + 1 < row) {
                const nextId = visited[i + 1][j] - 1;
                if (nextId !== id) {
                    answer[2] = Math.max(answer[2], components[nextId] + components[id]);
                }
            }
            if (j + 1 < col) {
                const nextId = visited[i][j + 1] - 1;
                if (nextId !== id) {
                    answer[2] = Math.max(answer[2], components[nextId] + components[id]);
                }
            }
        }
    }
    
    console.log(answer)
    console.log(components)
    console.log()
    console.log(visited.map(v => v.join(' ')).join('\n'))
    console.log()
    console.log(grid.map(v => v.join(' ')).join('\n'))
    return answer.join('\n');
}

console.log(solution(Number(N), Number(M), arr.map(r => r.split(' ').map(Number))));