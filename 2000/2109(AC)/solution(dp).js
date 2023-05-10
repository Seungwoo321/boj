const filePath = './input';
const [N, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
// dp
function solution (n, lectures) {
    lectures.sort((a, b) => a[1] - b[1]);
    const dp = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        const [p, d] = lectures[i];
        for (let j = d; j >= 1; j--) {
            if (dp[j] === 0) {
                dp[j] = dp[j - 1] + p;
            } else {
                dp[j] = Math.max(dp[j], dp[j - 1] + p);
            }
        }
    }
    return Math.max(...dp)
};
console.log(solution(Number(N), arr.map(v => v.split(' ').map(Number))));
