const filePath = './input';
const [N, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    arr.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
    let time = 0;
    let count = 0;
    for (let i = 0; i < n; i ++) {
        const [start, end] = arr[i];
        if (time <= start) {
            time = end;
            count ++;
        }
    }
    return count;
}
console.log(solution(N, arr.map(v => v.split(' ').map(Number))));