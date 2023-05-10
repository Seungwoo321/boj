const filePath = './input';
const [N, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
// greedy
function solution (n, lectures) {
    lectures.sort((a, b) => b[0] - a[0]);
    const days = Array(n + 1).fill(0);
    let fee = 0;
    for (let i = 0; i < n; i++) {
        const [p, d] = lectures[i];
        for (let j = d; j > 0; j--) {
            if (days[j] === 0) {
                days[j] = p;
                fee += p;
                break;
            }
        }
    }

    return fee;
};

console.log(solution(Number(N), arr.map(v => v.split(' ').map(Number))));