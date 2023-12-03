const filePath = require('path').join(__dirname, 'input');
const [nums, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, m] = nums.split(' ');
function solution (n, m, arr) {
    const recordable = value => {
        let count = 1;
        let time = 0;
        for (let i = 0; i < n; i++) {
            time += arr[i];
            if (time > value) {
                time = arr[i];
                count += Math.ceil(time / value);
            }
            if (count > m) return false;
        }
        return true;
    }
    let left = 1;
    let right = arr.reduce((acc, cur) => acc + cur, 0);
    let min = 0;
    while (left <= right) {
        let mid = Math.ceil((left + right) / 2);
        if (recordable(mid)) {
            min = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return min;
}
console.log(solution(+n, +m, arr.split(' ').map(Number)));