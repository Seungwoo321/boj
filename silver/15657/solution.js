const filePath = require('path').join(__dirname, 'input');
const [num, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(row => row.split(' ').map(Number));

function solution (n, m, arr) {
    arr.sort((a, b) => a - b)
    if (m === 1) {
        return arr.join('\n');
    }
    const permutation = (depth) => {
        if (depth === m) {
            return arr.slice(0, m).join(' ')
        }
        const result = [];
        for (let i = depth; i < n; i ++) {
            [arr[i], arr[depth]] = [arr[depth], arr[i]];
            result.push(permutation(depth + 1));
            [arr[i], arr[depth]] = [arr[depth], arr[i]];
        }
        return result.join('\n');
    }
    return permutation(0, []);
}

console.log(solution(...num, arr));