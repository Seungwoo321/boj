const filePath = './input';
const [N, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution(n, arr) {
    arr.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    let sum = 0;
    const pq = [];
    for (let i = 0; i < n; i ++) {
        const [dl, cupRamen] = arr[i];
        pq.push(cupRamen);
        sum += cupRamen;
        if (pq.length > dl) {
            const min = pq.reduce((acc, cur, i) => (cur < acc[0]) ? [cur, i] : acc, [Infinity, -1]);
            pq.splice(min[1], 1);
            sum -= min[0];
        }
    }
    return sum;
}
console.log(solution(Number(N), arr.map(v => v.split(' ').map(Number))));