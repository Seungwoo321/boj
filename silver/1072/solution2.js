const filePath = require('path').join(__dirname, 'input');
const [x, y] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(' ')
    .map(BigInt);
const z = (y * 100n) / x;
let left = 1n;
let right = 1000000000n;
let min = -1n;
while (left <= right) {
    const mid = (left + right) / 2n;
    if (z === ((y + mid) * 100n) / ((x + mid))) {
        left = mid + 1n;
    } else {
        right = mid - 1n;
        min = mid;
    }
}
console.log(min.toString());