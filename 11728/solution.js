const filePath = './input';
const [nums, a, b] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, m] = nums.split(' ').map(Number)
function solution (n, m, a, b) {
    const arr = []
    let i = 0;
    let j = 0;
    while (i < n && j < m) {
        if (a[i] < b[j]) arr.push(a[i++])
        else arr.push(b[j++])
    }
    if (i < n) for (i; i < n; i ++) arr.push(a[i]);
    if (j < m) for (j; j < m; j ++) arr.push(b[j]);
    return arr.join(' ');
}
console.log(solution(n, m, a.split(' ').map(Number), b.split(' ').map(Number)))