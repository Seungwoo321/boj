const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution (n, arr) {
    const dp = new Array(2 ** n).fill(0);
    const dfs = (bit, index, depth) => {
        if (depth === n) return;
        for (let i = index; i < n; i ++) {
            const next = bit | 1 << i;
            dp[next] = dp[bit];
            for (let j = 0; j < n; j ++) {
                if (bit & 1 << j) {
                    dp[next] += arr[i][j] + arr[j][i];
                }
            }
            dfs(next, i + 1, depth + 1);
        }
    }
    dfs(0, 0, 0);
    let min = Infinity;
    const len = 1 << n;
    for (let i = 1; i < len; i ++) {
        const diff = Math.abs(dp[i] - dp[len - i - 1]);
        if (diff < min) {
            min = diff;
        }
    }
    return min;
}

console.log(solution(+n, arr.map(r => r.split(' ').map(Number))));

function run (input) {
    const [n, ...arr] = input
        .toString()
        .trim()
        .split('\n')
        .map(r => r.trim())
    return solution(+n, arr.map(r => r.split(' ').map(Number)))
}

module.exports = {
    run
}