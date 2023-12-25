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
    const result = [];

    const permutation = (depth, tmp) => {
        if (depth === m) {
            result.push(tmp.slice());
            return;
        }
        
        for (let i = 0; i < n; i ++) {
            tmp.push(arr[i]);
            permutation(depth + 1, tmp);
            tmp.pop();
        }
    }
    permutation(0, []);

    return result.map(row => row.join(' ')).join('\n')
}

console.log(solution(...num, arr));