const filePath = require('path').join(__dirname, 'input');
const [n, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    const answer = new Array(n).fill(-1);
    const stack = [0];
    for (let i = 1; i < n; i ++) {
        while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
            answer[stack.pop()] = arr[i];
        }
        stack.push(i);
    }
    return answer.join(' ');
}
console.log(solution(+n, arr.split(' ').map(Number)));