const filePath = require('path').join(__dirname, 'input');
const [s1, s2] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const dp = new Array(s1.length + 1).fill(0).map(v => new Array(s2.length + 1).fill(0));
for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
        dp[i + 1][j + 1] = s1[i] === s2[j] ? dp[i][j] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
}
console.log(dp[s1.length][s2.length]);