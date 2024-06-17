const filePath = require('path').join(__dirname, 'input');
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const word = input.shift();
const [N, M] = input.shift().split(' ');

function solution (word, n, m, board) {
    const dy = [-1, -1, -1, 1, 1, 1, 0, 0];
    const dx = [-1, 0, 1, -1, 0, 1, -1, 1];
    const inRange = (y, x) => 0 <= y && n > y && 0 <= x && m > x;
    const hasWord = (y, x, word, direction = -1) => {
        if (!inRange(y, x)) return false;
        if (board[y][x] !== word[0]) return false;
        if (word.length === 1) return true;
        if (direction === -1) {
            for (let d = 0; d < 8; d++) {
                if (hasWord(y, x, word, d)) {
                    return true;
                }
            }
        } else {
            let nextY = y + dy[direction];
            let nextX = x + dx[direction];
            return hasWord(nextY, nextX, word.substring(1), direction);
        }
    }
    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < m; j ++) {
            if (hasWord(i, j, word)) {
                return 1;
            }
        }
    }
    return 0;
}

console.log(solution(word, +N, +M, input));