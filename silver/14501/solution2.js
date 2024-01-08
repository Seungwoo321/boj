const filePath = require('path').join(__dirname, 'input');
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function soluton (n, arr) {
    const dp  = new Array(n + 1).fill(0);
    let maxPoint = 0;
    for (let i = 0; i < n; i ++) {
        const [t, p] = arr[i];
        if (i + t <= n) dp[i + t] = Math.max(dp[i + t], dp[i] + p);
        dp[i + 1] = Math.max(dp[i + 1], dp[i]);
        maxPoint = Math.max(maxPoint, dp[i + 1]);
    }
    return maxPoint;
}
console.log(soluton(+num, arr.map(r => r.split(' ').map(Number))));

function run (input) {
    const [num, ...arr] = input
        .toString()
        .trim()
        .split('\n')
        .map(r => r.trim());
        return soluton(+num, arr.map(r => r.split(' ').map(Number)));
}
module.exports = {
    run
}