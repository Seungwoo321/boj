const filPath = './input';
const [N, S] = require('fs')
    .readFileSync(filPath)
    .toString()
    .trim()
    .split('\n');

function solution (n, s) {
    let stack = [];
    let max = 0;
    let count = 0;
    const d = new Array(n).fill(0);
    const [OPEN, CLOSE] = ['(', ')'];
    for (let i = 0; i < n; i ++) {
        if (s[i] === OPEN) {
            stack.push(i);
        } else if (stack.length) {
            d[i] = 1 
            d[stack[stack.length - 1]] = 1;
            stack.pop();
        }
    }
    for (let i = 0; i < n; i ++) {
        if (d[i]) {
            count ++;
            max = Math.max(max, count);
        } else {
            count = 0;
        }
    }
    return max;
}
console.log(solution(Number(N), S));

