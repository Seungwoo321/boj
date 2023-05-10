const filePath = './input';
const num = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim();

function solution (x) {
    let count = 1;
    while (x != 1) {
        if (x & 1) count ++;
        x = parseInt(x / 2);
    }
    return count;
}

console.log(solution(Number(num)));