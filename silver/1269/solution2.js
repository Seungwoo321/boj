const filePath = require('path').join(__dirname, 'input');
const [nums, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, m] = nums.split(' ');
function solution(n, m, aArr, bArr) {
    return (new Set([...aArr, ...bArr]).size * 2) - n - m;
}
console.log(solution(+n, +m, arr[0].split(' ').map(Number), arr[1].split(' ').map(Number)));