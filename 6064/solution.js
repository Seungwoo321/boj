const filePath = require('path').join(__dirname, 'input');
const [T, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution(arr) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return arr.map(row => {
        const [m, n, x, y] = row.split(' ').map(Number);
        const lcmNum = lcm(Math.max(m, n), Math.min(m, n));
        for (let year = x; year <= lcmNum; year += m) {
            if ((year % n === y) || (year % n === 0 && y === n)) return year;
        }
        return -1;
    }).join('\n');
}
console.log(solution(arr));
