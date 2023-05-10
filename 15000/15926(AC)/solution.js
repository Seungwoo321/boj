const filPath = './input';
const [N, S] = require('fs')
    .readFileSync(filPath)
    .toString()
    .trim()
    .split('\n');

function solution (n, s) {
    let stack = [-1];
    let max = 0;
    const [OPEN, CLOSE] = ['(', ')'];
    for (let i = 0; i < n; i ++) {
        if (s[i] === OPEN) {
            stack.push(i);
        }
        if (s[i] === CLOSE) {
            stack.pop();
            if (stack.length) {
                max = Math.max(max, i - stack[stack.length - 1]);
            } else {
                stack.push(i);
            }
        }
    }
    return max;
}
console.log(solution(Number(N), S));

