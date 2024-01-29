const filePath = require('path').join(__dirname, 'input');
const [n, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {



    const isMinus = (a, b) => a - b < 0
    const isPlus = (a, b) => a + b > 0
    const isZero = (a, b) => a - b === 0 || a + b === 0

    const recursive = (depth, m) => {
        if (depth === n) {
            return
        }
        for (let i = 0; i < m; i ++) {
            console.log(i, depth, m, n)
            // console.log(arr[i + (depth * (i + 1))], i + (depth * i))
        }
        recursive(depth + 1, m - 1)
    }
    recursive(0, n)

}
console.log(solution(+n, arr.split('')))