const filePath = require('path').join(__dirname, 'input');
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const arr = input.map(Number);
let left = 1
let right = Math.max.apply(null, arr);
let min = 0;
while (left <= right) {
    const mid = Math.ceil((left + right) / 2);
    const count = arr.reduce((acc, cur) => acc + Math.ceil(cur / mid), 0);
    if (count > n) {
        left = mid + 1;
    } else {
        min = mid;
        right = mid - 1;
    }
}
console.log(min);