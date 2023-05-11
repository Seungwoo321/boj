const filePath = require('path').join(__dirname, 'input');
const [nums, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [s, c] = nums.split(' ').map(Number);
function solution(s, c, arr) {
    const orderable = (value) => {
        let count = 0;
        for (let i = 0; i < s; i++) {
            count += Math.floor((arr[i] / value));
        }
        return count >= c
    }
    let max = 0;
    let left = 1;
    let right = 1e9;
    while (left <= right) {
        const mid = Math.ceil((left + right) / 2);
        if (orderable(mid)) {
            left = mid + 1;
            max = mid;
        } else {
            right = mid - 1;
        }
    }
    return arr.reduce((acc, cur) => acc + cur, 0) - (max * c);
}
console.log(solution(s, c, arr.map(Number)));