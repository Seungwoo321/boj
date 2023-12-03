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
        const recursive = (tmp, r, depth) => {
            if (depth === r) {
                return results.push(tmp.slice(0, r));
            }
            for (let i = depth; i < n; i ++) {
                [tmp[i], tmp[depth]] = [tmp[depth], tmp[i]];
                recursive(tmp, r, depth + 1);
                [tmp[i], tmp[depth]] = [tmp[depth], tmp[i]];
            } 
        }
        recursive(arr, m, 0);
        return results;
    }());
    return combination.sort((a, b) => {
        for (let i = 0; i < m; i++) {
            if (a[i] === b[i]) {
                continue;
            } else if (a[i] - b[i] > 0) {
                return 1;
            } else {
                return -1;
            }
        }
    }).map(r => r.join(' ')).join('\n');
}
console.log(solution(num[0], num[1], arr));