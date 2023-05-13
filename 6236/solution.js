const filePath = require('path').join(__dirname, 'input');
const [nums, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, m] = nums.split(' ');
function solution (n, m, arr) {
    const withdrawMoney = (value) => {
        let count = 0;
        let save = 0;
        for (let i = 0; i < n; i ++) {
            if (save < arr[i]) {
                save = value - arr[i];
                count ++;
            } else {
                save -= arr[i];
            }
            if (count > m) return false;
        }
        return true;
    }
    let min = 0;
    let left = Math.max.apply(null, arr);
    let right = arr.reduce((acc, cur) => acc + cur, 0);
    while (left <= right) {
        let mid = Math.ceil((left + right) / 2);
        if (withdrawMoney(mid)) {
            min = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return min;
}
console.log(solution(+n, +m, arr.map(Number)));