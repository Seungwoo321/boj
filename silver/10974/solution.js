const filePath = require('path').join(__dirname, 'input');
const num = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim();

function solution (n) {
    if (n === 1) return 1
    let arr = Array.from({ length: n}, (_, i) => i + 1);
    let nFactorial = 1;

    for (let i = 1; i <= n; i ++) {
        nFactorial *= i
    }
    console.log(nFactorial)
    let maxI = -1;
    let maxJ = -1;
    const results = [arr.join(' ')];
    const nextPermutation = () => {
        if (results.length === nFactorial) {
            return results.join('\n')
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
        arr = arr.concat(arr.splice(maxI + 1).reverse())
        results.push(arr.join(' '));
        return nextPermutation();
    }
    return nextPermutation();
}
console.log(solution(+num));

