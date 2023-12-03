const filePath = require('path').join(__dirname, 'input');
const [num, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(row => row.split(' ').map(Number));

function solution(n, m, arr) {
    const combination = (function () {
        const isSelected = new Array(n).fill(0);
        const recursive = (r, depth, tmp) => {
            if (depth === r) {
                return tmp.join(' ');
            }
            let results = []
            for (let i = 0; i < n; i++) {
                if (isSelected[i]) continue;
                isSelected[i] = true;
                tmp.push(arr[i]);
                results.push(recursive(r, depth + 1, tmp));
                tmp.pop();
                isSelected[i] = false;
            }
            return results.join('\n');
        }
        return recursive(m, 0, []);
    }());
    return combination;
}
console.log(solution(num[0], num[1], arr.sort((a, b) => a - b)));