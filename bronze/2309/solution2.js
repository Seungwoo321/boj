const filePath = require('path').join(__dirname, 'input');
const [...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution(arr) {
    arr.sort((a, b) => a - b);
    const target = arr.reduce((acc, cur) => acc + cur, 0) - 100;
    const dfs = (current, next, count) => {
        if (arr[current] + arr[next] === target) {
            return arr.filter(v => v !== arr[current] && v !== arr[next]).join('\n');
        }
        if (count === 2) return;
        for (let i = next + 1; i < 9; i ++) {
            const result = dfs(next, i, count + 1);
            if (result) process.exit(console.log(result));
        }
        return;
    }
    dfs(0, 0, 0);
}
solution(arr.map(Number));