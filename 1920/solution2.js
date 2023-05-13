const filePath = './input';
const [n, a, m, b] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution(n, a, m, b) {
    const arr = new Array(n).fill(0);
    a.forEach((v, i) => arr[v - 1] = 1);
    return b.map((v, i) => arr[v - 1] ? 1 : 0).join('\n');
}
console.log(solution(Number(n), a.split(' '), Number(m), b.split(' ')));