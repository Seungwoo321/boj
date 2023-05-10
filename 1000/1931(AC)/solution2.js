const filePath = './input';
const [N, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution(n, arr) {
    arr.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
    return arr.reduce(([time, count], [start, end]) => {
        return time <= start ? [end, count + 1] : [time, count];
    }, [0, 0])[1];
}
console.log(solution(N, arr.map(v => v.split(' ').map(Number))));