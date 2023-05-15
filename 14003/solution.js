const filePath = require('path').join(__dirname, 'input');
const [n, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    const prev = new Array(n).fill(-1);
    const dp = new Array(n).fill(1);
    let count = 0;
    let index = 0;
    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < i; j ++) {
            if (arr[i] > arr[j] && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
                if (dp[i] > count) {
                    count = dp[i];
                    index = i;
                }
            }
        }
    }
    let i = prev.length;
    const answer = [];
    while (i > 0) {
        if (answer.length === count) break;
        if (arr[i] > 0) {
            answer.unshift(arr[i]);
            i = prev[i];
        } else {
            i--;
        }
    }
    return [count, answer.join(' ')].join('\n');
}
console.log(solution(+n, arr.split(' ').map(Number)));