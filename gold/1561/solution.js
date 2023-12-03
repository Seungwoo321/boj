const filePath = require('path').join(__dirname, 'input');
const [nums, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, m] = nums.split(' ').map(Number);
function solution (n, m, arr) {
    const rideable = value => {
        let people = m;
        for (let time of arr) {
            people += Math.floor(value / time);
            if (people > n) return people;
        }
        return people;
    }
    let left = 0;
    let right = 6e10;
    let count = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) /2);
        const people = rideable(mid);
        if (people < n) {
            left = mid + 1;
            count = people;
        } else {
            right = mid - 1

        }
    }
    for (let i = 0; i < m; i ++) {
        if (left % arr[i] === 0) {
            count++;
        }
        if (count === n) {
            return i + 1;
        };
    }
}
console.log(solution(n, m, arr.split(' ').map(Number)));