const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution (n, powers) {


    const result = []
    const permutation = (arr, r, depth, tmp) => {
        if (tmp.length === r) {
            result.push([...tmp])
            return
        }
        for (let i = depth; i < arr.length; i ++) {
            tmp.push(i);
            permutation(arr, r, i + 1, tmp);
            tmp.pop();
        }
    }
    permutation(Array.from({ length: n }, (_, i) => i), 2, 0, [])
    console.log(result)
    // for (let i = 2; i < n - 1; i ++) {
    // }
    
}

console.log(solution(+n, arr.map(r => r.split(' ').map(Number))));