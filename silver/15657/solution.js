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
    const permutation = (j, depth, tmp) => {
        if (depth === m) {
            return tmp.join(' ');
        }
        const result = [];
        for (let i = j; i < n; i ++) {
            tmp.push(arr[i]);
            result.push(permutation(i, depth + 1, tmp));
            tmp.pop();
        }
        return result.join('\n');
    }
    return permutation(0, 0, []);
}

console.log(solution(...num, arr));