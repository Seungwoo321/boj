const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    let answer = 0;
    for (let i = 0; i < n; i ++) {
        const strArr = arr[i].split('');
        let j = 0;
        const stack = [];
        while (j < strArr.length) {
            const str = strArr[j++];
            if (stack[stack.length - 1] === str) stack.pop();
            else stack.push(str);
        }
        answer += stack.length === 0;
    }
    return answer;
}
console.log(solution(+n, arr))