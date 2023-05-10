const filePath = require('path').join(__dirname, 'input');
const [a, b, c] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(' ')
    .map(BigInt);
function solution(a, b, c) {
    // const power = (a, b) => b === 0 ? 1 : a * power(a, b - 1);
    // return power(a, b) % c;

    if (!b) return 1n
    const d = solution(a, b / 2n, c);
    if (b % 2n) return (d * d * a) % c;
    return (d * d) % c;
}
console.log(solution(a, b, c).toString());


// const [a, b, c] = require('fs')
//     .readFileSync(filePath)
//     .toString()
//     .trim()
//     .split(' ');
// function solution(a, b, c) {
//     if (b === 1) return a % c;
//     let d = solution(a, Math.floor(b / 2), c);
//     d = ((d * d) % c)
//     if (b % 2) return d = (d * a) % c
//     return d;
// }
// console.log(solution(BigInt(a), +b, BigInt(c)).toString());