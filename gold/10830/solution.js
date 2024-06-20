const filePath = require('path').join(__dirname, 'input');
const [NB, ...A] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

const [n, b] = NB.split(' ');
function solution (n, b, arr) {
    const identity = n => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => +(i === j)));
    const timesMatrix = (n, a, b) => {
        const matrix = Array.from({ length: n }, () => new Array(n).fill(0));
        for (let i = 0; i < n; i ++) {
            for (let j = 0; j < n; j ++) {
                for (let k = 0; k < n; k ++) {
                    matrix[i][j] += (a[i][k] * b[k][j]) % 1000;
                }
            }
        }
        return matrix;
    }
    const memoization = new Array(n).fill(0)
    const pow = (matrix, m) => {
        if (memoization[m]) return memoization[m];
        if (m === 0) return identity(matrix.length);
        if (m % 2 > 0) return timesMatrix(matrix.length, pow(matrix, m - 1), matrix);
        const half = pow(matrix, m / 2);
        memoization[m] = timesMatrix(half.length, half, half);
        return memoization[m]
    }
    return pow(arr, b)
        .map(r => r
            .map(c => c % 1000)
            .join(' '))
        .join('\n');
}
console.log(solution(+n, +b, A.map(r => r.split(' ').map(v => +v % 1000))));