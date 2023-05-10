const filePath = './input';
const [N, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
// pq
function solution (n, lectures) {
    lectures.sort((a, b) => a[1] - b[1] || b[0] - a[0]);
    const pq = []
    let fee = 0;
    for (let i = 0; i < n; i++) {
        const [p, d] = lectures[i];
        pq.push(p);
        fee += p;
        if (pq.length > d) {
            const min = pq.reduce((acc, cur, i) => cur < acc[0] ? [cur, i] : acc, [Infinity, -1]);
            pq.splice(min[1], 1);
            fee -= min[0];
        }
    }
    return fee;
};
console.log(solution(Number(N), arr.map(v => v.split(' ').map(Number))));