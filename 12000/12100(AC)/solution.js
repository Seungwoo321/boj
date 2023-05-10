const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    const rotate90 = (board) => {
        const rotated = Array.from({ length: n }, () => new Array(n).fill(0));
        for (let i = 0; i < n; i ++) {
            for (let j = 0; j < n; j ++) {
                rotated[i][j] = board[n - j - 1][i];
            }
        }
        return rotated;
    }
    const moveBoard = (board) => {
        for (let i = 0; i < board.length; i++) {
            let tmp = [];
            let flag = false;
            for (let j = 0; j < board.length; j++) {
                if (board[i][j] === 0) continue;
                if (!flag && tmp.length && tmp[tmp.length - 1] === board[i][j]) {
                    tmp[tmp.length - 1] *= 2;
                    flag = true;
                } else {
                    tmp.push(board[i][j]);
                    flag = false;
                }
            }
            while (tmp.length < n) {
                tmp.push(0);
            }
            board[i] = tmp;
        }
        return moved;
    }
    const permutations = (board, depth) => {
        if (depth === 5) {
            return Math.max.apply(null, board.map(r => Math.max.apply(null, r)));
        }
        let result = 0;
        for (let i = 0; i < 4; i ++) {
            // 5회 이동 하고 가장 큰 숫자를 구한다
            result = Math.max(result, permutations(moveBoard(board.slice()), depth + 1));
            // 네 방향을 회전한다
            board = rotate90(board)
        }
        return result;
    }
    return permutations(arr, 0);
}
console.log(solution(+n, arr.map(r => r.split(' ').map(Number))));
