const filePath = require('path').join(__dirname, 'input');
const [n, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution(n, arr) {
    let sum = 0;
    let max = arr[0];
    for (let i = 0; i < n; i++) {
        sum += arr[i];
        max = Math.max(sum, max);
        if (sum < 0) sum = 0;
    }
    return max;
}
console.log(arr.split(' ').map(Number).reduce((acc, cur) => {
    return [acc[0] + cur < 0 ? 0 : acc[0] + cur , Math.max(acc[0] + cur, acc[1])];
}, [0, -Infinity])[1]);
console.log(arr.split(' ').map(Number).reduce((acc, cur) => [acc[0] + cur < 0 ? 0 : acc[0] + cur, Math.max(acc[0] + cur, acc[1])], [0, -Infinity])[1]);
console.log(solution(+n, arr.split(' ').map(Number)));
