const filePath = require('path').join(__dirname, 'input');
const [n, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    let answer = Math.max.apply(null, arr);
    for (let i = 1; i < n; i ++) {
        if (arr[i - 1] > 0) {
            arr[i] = arr[i - 1] + arr[i];
            answer = Math.max(answer, arr[i]);
        }
    }
    return answer;
}
console.log(solution(+n, arr.split(' ').map(Number)));
