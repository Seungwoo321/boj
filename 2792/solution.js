const filePath = require('path').join(__dirname, 'input');
const [nums, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, m] = nums.split(' ');
function solution(n, m, arr) {
    const giveJewel = value => {
        let people = 0;
        for (let i = 0; i < m; i++) {
            people += Math.ceil(arr[i] / value);
            if (people > n) return true;
        }
        return false;
    }
    let left = 1
    let right = Math.max.apply(null, arr);
    let minCount = 0;
    while (left <= right) {
        const mid = Math.ceil((left + right) / 2);
        if (giveJewel(mid)) {
            left = mid + 1;
        } else {
            minCount = mid;
            right = mid - 1;
        }
    }
    return minCount;
}
console.log(solution(+n, +m, arr.map(Number)));