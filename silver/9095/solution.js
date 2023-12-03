const filePath = require('path').join(__dirname, 'input');
const [T, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const dfs = (n, m) => n === m ? 1 : (n > m ? 0 : dfs(n + 1, m) + dfs(n + 2, m) + dfs(n + 3, m));
for (let i = 0; i < +T; i++) {
    console.log(dfs(0, +arr[i]));
}