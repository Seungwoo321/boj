const filePath = require('path').join(__dirname, 'input');
const [a, b, c] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(' ');
function solution (a, b, c) {
    return [
        (a + b) % c,
        ((a % c) + (b % c)) % c,
        (a * b) % c,
        ((a % c) * (b % c)) % c
    ].join('\n');
}
console.log(solution(+a, +b, +c));