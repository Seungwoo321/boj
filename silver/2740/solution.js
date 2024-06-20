const filePath = require('path').join(__dirname, 'input');
// const filePath = '/dev/stdin';
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [N, M] = input.shift().split(' ');
const A = input.splice(0, +N);
const [_, L] = input.shift().split(' ');
function solution (n, m, l, a, b) {
    const matrix = Array.from({ length: n }, () => new Array(l).fill(0));
    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < l; j ++) {
            for (let k = 0; k < m; k ++) {
                matrix[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return matrix.map(r => r.join(' ')).join('\n');
}
console.log(solution(+N, +M, +L, A.map(r => r.split(' ').map(c => +c)), input.map(r => r.split(' ').map(c => +c))));