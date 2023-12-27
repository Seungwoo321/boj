const filePath = require('path').join(__dirname, 'input');
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(row => row.split(' ').map(Number));

function solution (n, m, k, arr) {
    const arr1 = []
    const arr2 = []
    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < m; j ++) {
            let index = i * m + j;
            if (index % 2 == 0) {
                arr1.push(arr[i][j]);
            } else {
                arr2.push(arr[i][j])
            }
        }
    }
    const combination = (arr, r, depth, tmp) => {
        if (depth === r) {
            console.log(tmp)
            return tmp.reduce((acc, cur) => acc + cur, 0);
        }
        const result = [];
        for (let i = depth; i < arr.length; i ++) {
            tmp[depth] = arr[i];
            result.push(combination(arr, r, depth + 1, tmp))
        }
        return Math.max.apply(null, result);
    }
    
    console.log(combination(arr1, k, 0, new Array(k).fill(0)))
}

console.log(solution(...num, arr))


