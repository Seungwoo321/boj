const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
function solution (n, arr) {
    const answer = [];
    for (let i = 0; i < n; i ++) {
        let count = 0;
        let num = +arr[i];
        for (let j = 5; j <= num; j *= 5) {
            count += Math.floor(num / j);
        }
        answer.push(count);
    }
    return answer.join('\n');
}
console.log(solution(+n, arr));