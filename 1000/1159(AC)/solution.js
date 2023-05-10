const filePath = require('path').join(__dirname, 'input')
const [N, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, names) {
    const counts = new Array(26).fill(0);
    for (let i = 0; i < n; i ++) {
        counts[names[i][0].charCodeAt() - 97]++;
    }
    return counts.reduce((acc, cur, i) => (cur >= 5) ? acc += String.fromCharCode(i + 97) : acc, '') || 'PREDAJA';
}
console.log(solution(Number(N), arr))