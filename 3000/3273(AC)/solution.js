const filePath = require('path').join(__dirname, 'input');
const [n, arr, x] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr, x) {
    const data = new Set();
    let count = 0;
    for (let i = 0; i < n; i ++) {
        const target = x - arr[i];
        if (data.has(target)) {
            count ++;
        } else {
            data.add(arr[i]);
        }
    }
    return count;
}
console.log(solution(+n, arr.split(' ').map(Number), +x));