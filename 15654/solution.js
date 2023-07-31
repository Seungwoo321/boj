const filePath = require('path').join(__dirname, 'input');
const [num, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(row => row.split(' ').map(Number));

function solution (n, m, arr) {
    const combination = (function () {
        const results = [];
        const recursive = (n, r, depth, tmp = []) => {
            if (r === 0) {
                return results.push(tmp.join(' '));
            }
            for (let i = depth; i <= n; i ++) {
                tmp.push(arr[i]);
                recursive(n, r - 1, i, tmp.slice());
                tmp.pop();
            } 
        }
        recursive(n, m, 0);
        return results.join('\n');
    }());
    return combination;
}
console.log(solution(num[0], num[1], arr));