const filePath = require('path').join(__dirname, 'input');
const [...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution(arr) {
    const n = 9;
    const r = 7;
    const solve = () => {
        let sum = 0;
        for (let i = 0; i < r; i ++) {
            sum += arr[i];
        }
        if (sum === 100) {
            console.log(arr.slice(0, r).sort((a, b) => a - b).join('\n'));
            process.exit(0);
        }
    }
    const makePermutation = (n, r, depth) => {
        if (depth === r) {
            solve();
        }
        for (let i = depth; i < n; i ++) {
            [arr[i], arr[depth]] = [arr[depth], arr[i]];
            makePermutation(n, r, depth + 1);
            [arr[i], arr[depth]] = [arr[depth], arr[i]];
        }
    }
    makePermutation(n, r, 0);
}
solution(arr.map(Number));