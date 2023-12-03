const filePath = require('path').join(__dirname, 'input');
const [N, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(Number);
function solution (n, arr) {
    const stack = [];
    let answer = '';
    let num = 1;
    for (let i = 0; i < n; i ++) {
        const target = arr[i]
        while (n <= target) {
            stack.push(num ++);
            answer += '+\n';
        }
        if (stack[stack.length - 1] === target) {
            answer += '-\n';
            stack.pop();
        } else {
            return 'NO';
        }
    }
    return answer;
}
console.log(solution(N, arr));
