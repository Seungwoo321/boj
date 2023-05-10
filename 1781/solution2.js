const filePath = './input';
const [N, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution(n, arr) {
    arr.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    const pq = [];
    for (let i = 0; i < n; i++) {
        pq.push(arr[i][1]);
        if (pq.length > arr[i][0]) {
            const min = pq.reduce((acc, cur, i) => (cur < acc[0]) ? [cur, i] : acc, [Infinity, -1]);
            pq.splice(min[1], 1);
        }
    }
    return pq.reduce((acc, cur) => acc + cur, 0);
}
console.log(solution(Number(N), arr.map(v => v.split(' ').map(Number))));