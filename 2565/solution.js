const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    arr.sort((a, b) => a[0] - b[0]);
    const nums = arr.map(v => v[1]);
    const lowerBound = (value, list) => {
        let left = 0;
        let right = list.length
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (list[mid] < value) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }
    const lis = [nums[0]];
    for (let i = 1; i < n; i ++) {
        const index = lowerBound(nums[i], lis);
        if (index === lis.length) lis.push(nums[i]);
        else lis[index] = nums[i];
    }
    return n - lis.length;
}
console.log(solution(n, arr.map(r => r.split(' ').map(Number))));