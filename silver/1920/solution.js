const filePath = './input';
const [n, a, m, b] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution(n, a, m, b) {
    const arr = new Array(n).fill(0);
    const result = new Array(m).fill(0);
    a.forEach((v, i) => {
        arr[v - 1] = 1;
    });
    b.forEach((v, i) => {
        if (arr[v - 1]) result[i] = 1;
    });
    return result.join('\n');
}
console.log(solution(Number(n), a.split(' '), Number(m), b.split(' ')));