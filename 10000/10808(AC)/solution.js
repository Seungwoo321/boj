const filePath = './input';
const input = require('fs').readFileSync(filePath).toString().trim();
function solution (str) {
    const count = new Array(26).fill(0)
    for (let i = 0; i < str.length; i ++) {
        count[str.charCodeAt(i) - 'a'.charCodeAt(0)] ++;
    }
    return count.join(' ');
}
console.log(solution(input));