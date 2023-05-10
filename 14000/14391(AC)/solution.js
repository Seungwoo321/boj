const filePath = './input';
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [N, M] = num.split(' ').map(Number);
function solution (row, col, grid) {
    let max = 0;
    for (let s = 0; s < (1 << (row * col)); s++) {
        console.log(s)
        let sum = 0;
        for (let i = 0; i < row; i ++) {
            let cur = 0;
            for (let j = 0; j < col; j ++) {
                let k = i * col + j;
                if (!(s & (1 << k))) {
                    cur = cur * 10 + grid[i][j];
                } else {
                    sum += cur;
                    cur = 0;
                }
            }
            sum += cur;
        }
        for (let j = 0; j < col; j ++) {
            let cur = 0;
            for (let i = 0; i < row; i ++) {
                let k = i * col + j;
                if (s & (1 << k)) {
                    cur = cur * 10 + grid[i][j];
                } else {
                    sum += cur;
                    cur = 0;
                }
            }
            sum += cur;
        }
        max = Math.max(max, sum);
    }
    return max;
}
console.log(solution(N, M, arr.map(r => r.split('').map(Number))));
