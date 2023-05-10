const filePath = require('path').join(__dirname, 'input');
const arr = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(' ')
    .map(Number);
function solution(arr) {
    const grid = {
        0: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 0],
        10: [10, 13, 16, 19, 25, 30, 35, 40, 0],
        20: [20, 22, 24, 25, 30, 35, 40, 0],
        30: [30, 28, 27, 26, 25, 30, 35, 40, 0],
        25: [25, 30, 35, 40, 0]
    };
    const isBlue = (y, x) => (y === 0 && ((x === 5) || (x === 10) || (x === 15)));
    const is25Line = (y, x) => ((y === 0 && x === 20) || (y == 10 && 4 <= x && x <= 7) || (y === 20 && 3 <= x && x <= 6) || (y === 30 && 4 <= x && x <= 7));
    const exist = (y, x, pos) => pos.some(([py, px]) => (px > 0 || py > 0) && py === y && px === x);
    const next = (y, moveX) => {
        if (isBlue(y, moveX)) return [grid[0][moveX], 0];
        else if (is25Line(y, moveX)) return [25, grid[25].indexOf(grid[y][moveX])];
        return [y, moveX];
    }
    const pos = [[0, 0], [0, 0], [0, 0], [0, 0]];
    const bfs = (depth, score) => {
        if (depth === 10) return score;
        let result = 0;
        for (let i = 0; i < 4; i++) {
            const [y, x] = pos[i];
            const [ny, nx] = next(y, x + arr[depth]);
            if (exist(ny, nx, pos)) continue;
            pos[i] = [ny, nx];
            result = Math.max(result, bfs(depth + 1, (score + (grid[ny][nx] ?? 0))));
            pos[i] = [y, x];
        }
        return result;
    }
    return bfs(0, 0);
}
console.log(solution(arr));