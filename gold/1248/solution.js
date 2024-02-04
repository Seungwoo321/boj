const filePath = require('path').join(__dirname, 'input');
const [n, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    const matrix = Array.from({ length: n }, (_) => new Array(n).fill(''));
    let k = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            matrix[i][j] = arr[k] === '+' ? 1 : arr[k] === '-' ? -1 : 0;
            k++;
        }
    }
    const results = [];
    const validSequence = (signIndex) => {
        let sum = 0;
        for (let i = signIndex; i >= 0; i --) {
            sum += results[i];
            const sign = matrix[i][signIndex];
            if (
                (sum > 0 && sign !==  1) ||
                (sum < 0 && sign !== -1) ||
                (sum === 0 && sign !== 0)
            ) {
                return false;
            }
        }
        return true;
    }

    const recursive = (index) => {
        if (index === n) {
            return true;
        }
        const sign = matrix[index][index];
        for (let i = 1; i <= 10; i++) {
            results.push(i * sign);
            if (validSequence(index)) {
                if (recursive(index + 1)) {
                    return true;
                }
            }
            results.pop();
        }
        return false;
    }
    recursive(0);
    return results.join(' ');
}
console.log(solution(+n, arr.split('')));