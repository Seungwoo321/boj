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
    const hasWord = (y, x, word, d) => {
        if (!inRange(y, x)) return false;
        if (board[y][x] !== word[0]) return false;
        if (word.length === 1) return true;
        let nextY = y + dy[d];
        let nextX = x + dx[d];
        if (hasWord(nextY, nextX, word.substring(1), d)) {
            return true;
        } else {
            return false
        }
    }
    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < m; j ++) {
            for (let direction = 0; direction < 8; direction ++) {
                if (hasWord(i, j, word, direction)) {
                    return 1;
                }
            }
        }
    }
    return 0;
}
console.log(solution(word, +N, +M, input));