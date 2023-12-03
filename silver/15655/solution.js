const filePath = require('path').join(__dirname, 'input');
const [num, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(row => row.split(' ').map(Number));

function solution (n, m, arr) {
    arr.sort((a, b) => a - b);
    const result = [];
    const backtrack = (depth, tmp) => {
        if (tmp.length === m) {
            result.push([...tmp].join(' '));
            return;
        }
        for (let i = depth; i < n; i++) {
            tmp.push(arr[i]);
            backtrack(i + 1, tmp);
            tmp.pop();
        }
    }
    backtrack(0, []);
    return result.join('\n');
}
console.log(solution(num[0], num[1], arr));

module.exports = {
    solution
}