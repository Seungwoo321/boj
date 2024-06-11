const filePath = require('path').join(__dirname, 'input');
const [n, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution (n, arr) {
    const getMaxOfSum = (n, depth, max) => {
        if (depth === n) {
            max = Math.max(max, arr.reduce((acc, cur, index) => {
                if (index >= arr.length - 1) return acc;
                acc += Math.abs(cur - arr[index + 1]);
                return acc;
            }, 0))
            return max;
        }
        for (let i = depth; i < n; i ++) {
            [arr[i], arr[depth]] = [arr[depth], arr[i]];
            max = getMaxOfSum(n, depth + 1, max);
            [arr[i], arr[depth]] = [arr[depth], arr[i]];
        }
        return max;
    }
    return getMaxOfSum(n, 0, 0);
}

console.log(solution(+n, arr.split(' ').map(a => +a)));