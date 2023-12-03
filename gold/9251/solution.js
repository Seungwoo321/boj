const filePath = require('path').join(__dirname, 'input');
const [s1, s2] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (str1, str2) {
    const dp = new Array(str1.length + 1).fill(0).map(v => new Array(str2.length + 1).fill(0));
    for (let i = 1; i <= str1.length; i ++) {
        for (let j = 1; j <= str2.length; j ++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[str1.length][str2.length];
}
console.log(solution(s1, s2));
