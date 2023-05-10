const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    const answer = [];
    for (let i = 0; i < n; i ++) {
        const stack = [];
        const ps = arr[i];
        for (let j = 0; j < ps.length; j ++) {
            if (ps[j] === ')' && stack[stack.length - 1] === '(') stack.pop()
            else stack.push(ps[j]);
        }
        answer.push(stack.length ? 'NO' : 'YES');
    }
    return answer.join('\n');
}
console.log(solution(+n, arr));