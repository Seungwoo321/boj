const filePath = require('path').join(__dirname, 'input');
const [nums, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, m] = nums.split(' ');
function solution (n, m, aArr, bArr) {
    bArr.sort((a, b) => a - b);
    const binarySearch = (target, arr) => {
        let left = 0;
        let right = arr.length;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) {
                left = mid + 1;
            } else if (arr[mid] > target) {
                right = mid - 1;
            } else {
                return arr[mid] === target;
            }
        }
        return false;
    }
    let count = 0;
    for (let i = 0; i < n; i ++) {
        count += binarySearch(aArr[i], bArr);
    }
    return n + m - count * 2;
}
console.log(solution(+n, +m, arr[0].split(' ').map(Number), arr[1].split(' ').map(Number)));