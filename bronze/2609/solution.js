const filePath = require('path').join(__dirname, 'input');
const [a, b] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(' ')
    .map(Number);
function solution (a, b) {
    const gcd = (a, b) => a % b ? gcd(b, a % b) : b;
    const lcm = (a, b) => a * b / gcd(a, b);
    return [
        gcd(a, b),
        lcm(a, b)
    ].join('\n');
}
console.log(solution(a, b));