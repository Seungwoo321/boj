const filePath = require('path').join(__dirname, 'input');
const [nums, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

const [H, W, L] = nums.split(' ');
const word = arr.pop();
const board = arr.map(r => r.split(''));

function solution (h, w, l, word, board) {
    const directions = [[-1, -1], [-1, 0], [-1, 1], [1, -1], [1, 0], [1, 1], [0, -1], [0, 1]];
    let visited = Array.from({ length: h }, () => new Array(w).fill(0));
    const findWord = (y, x, word, visited) => {
        // if (y < 0 || y >= h || x < 0 || x >= w) return false;
        if (board[y][x] !== word[0]) return false
        if (word.length === 1) return true
        let count = 0;
        for (let [dy, dx] of directions) {
            const ny = dy + y;
            const nx = dx + x;
            if (ny < 0 || ny >= h || nx < 0 || nx >= w) continue;
            if (visited[ny][nx]) continue;
            visited[ny][nx] = 1
            count += findWord(ny, nx, word.substring(1), visited.map(r => r.fill(0)));
        }
        return count;
    }
    let totalCount = 0;
    for (let i = 0; i < h; i ++) {
        for (let j = 0; j < w; j ++) {
            if (board[i][j] === word[0]) {
                totalCount += findWord(i, j, word, visited.map(r => r.fill(0)));
            }
        }
    }
    return totalCount;
}

console.log(solution(+H, +W, +L, word, board))
