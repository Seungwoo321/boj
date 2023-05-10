const filePath = require('path').join(__dirname, 'input');
const [n, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution(n, arr) {
    const nums = [arr[0]];
    for (let i = 1; i < n; i++) {
        nums.push(Math.max(arr[i], nums[i - 1] + arr[i]));
    }
    return Math.max.apply(null, nums);
}
console.log(solution(+n, arr.split(' ').map(Number)));
