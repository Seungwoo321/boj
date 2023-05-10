const filePath = './input';
const [N, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    arr.sort((a, b) => a[0] - b[0]);
    let answer = 0;
    for (let i = 0; i < n; i ++) {
        const [time, wait] = arr[i];
        if (answer < time) {
            answer = time;
        }
        answer += wait;
    }
    return answer
}
console.log(solution(Number(N), arr.map(v => v.split(' ').map(Number))));