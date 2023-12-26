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
    const permutation = (depth, tmp) => {
        if (depth === m) {
            return tmp.join(' ');
        }
        const result = [];
        for (let i = 0; i < n; i ++) {
            tmp[depth] = arr[i]
            result.push(permutation(depth + 1, tmp));
        }
        return result.join('\n');
    }
    return permutation(0, new Array(m).fill(0));
}
console.log(solution(...num, arr));