const filePath = require('path').join(__dirname, 'input');
const [num, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(row => row.split(' ').map(Number));
function solution (n, m, arr) {
    arr.sort((a, b) => a - b);
    if (m === 1) {
        return arr.join('\n');
    }
    const permutation = (depth, j, tmp) => {
        if (depth === m) {
            return tmp.join(' ');
        }
        const result = [];
        for (let i = j; i < n; i ++) {
            tmp[depth] = arr[i];
            result.push(permutation(depth + 1, i, tmp));
        }
        return result.join('\n');
    }
    return permutation(0, 0, new Array(m).fill(0));
}
console.log(solution(...num, arr));