const filePath = require('path').join(__dirname, 'input');
const [n, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution (n, arr) {
    arr.sort((a, b) => a - b);
    let nFactorial = 1;
    for (let i = 1; i <= n; i ++) {
        nFactorial *= i;
    }
    let maxI = 0;
    let maxJ = 0;
    const sum = (arr) => {
        return arr.reduce((acc, cur, index) => {
            if (index >= arr.length - 1) return acc;
            acc += Math.abs(cur - arr[index + 1]);
            return acc;
        }, 0)
    }
    const nextPermutation = (depth, max) => {
        if (depth === nFactorial) {
            return max
        }
        for (let i = 0; i < n; i ++) {
            if (arr[i] < arr[i + 1]) {
                maxI = i;
            }
        }
        for (let j = 0; j < n; j ++) {
            if (arr[maxI] < arr[j]) {
                maxJ = j;
            }
        }
        [arr[maxI], arr[maxJ]] = [arr[maxJ], arr[maxI]];
        arr = arr.concat(arr.splice(maxI + 1).reverse());
        if (max < sum(arr)) {
            max = sum(arr)
        }
        return nextPermutation(depth + 1, max);
    }
    return nextPermutation(0, 0);
}
console.log(solution(+n, arr.split(' ').map(a => +a)));