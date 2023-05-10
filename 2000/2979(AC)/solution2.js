const filePath = './input';
const [nums, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

const t = arr.map(v => v.split(' ').map(Number));
const [a, b, c] = nums.split(' ').map(Number);
const pay = ([start, end], i) => start <= i && i < end;

console.log(new Array(100).fill(0).reduce((acc, cur, i) => {
    const count = pay(t[0], i + 1) + pay(t[1], i + 1) + pay(t[2], i + 1);
    if (count === 1) acc += a * count;
    else if (count === 2) acc += b * count
    else if (count === 3) acc += c * count;
    return acc;
}, 0));
