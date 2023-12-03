const filePath = './input';
const [n, a, m, b] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, a, m, b) {
    const table = new Set(a);
    return b.reduce((acc, cur) => acc + (table.has(cur) ? 1 : 0) + '\n', '').trim();
}
console.log(solution(Number(n), a.split(' '), Number(m), b.split(' ')));