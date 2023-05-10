const filePath = require('path').join(__dirname, 'input');
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (arr) {
    const answer = [];
    for (let i = 0; i < arr.length - 1; i ++) {
        const stack = [];
        for (let j = 0; j < arr[i].length; j ++) {
            const char = arr[i][j];
            if (char === '(' || char === '[')  {
                stack.push(char);
            } else if ((char === ')' && stack[stack.length - 1] === '(') || char === ']' && stack[stack.length - 1] === '[') {
                stack.pop();
            } else if (char === ')' || char === ']') {
                stack.push(char);
            }
        }
        answer.push(stack.length ? 'no' : 'yes');
    }
    return answer.join('\n');
}
console.log(solution(input));