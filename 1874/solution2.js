const filePath = require('path').join(__dirname, 'input');
const [N, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(Number);

function solution (n, arr) {
    const stack = [];
    const answer = [];
    let num = 1;
    for (let i = 0; i < n; i ++) {
        const target = arr[i]
        while (num <= target) {
            stack.push(num ++);
            answer.push('+');
        }
        if (stack[stack.length - 1] === target) {
            answer.push('-');
            stack.pop();
        } else {
            return 'NO';
        }
    }
    return answer.join('\n');
}
console.log(solution(N, arr));
