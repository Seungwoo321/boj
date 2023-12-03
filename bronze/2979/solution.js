const filePath = './input';
const [nums, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution (costs, times) {
    const counts = new Array(101).fill(0);
    let [min, max] = [Infinity, 0];
    for (let [start, end] of times) {
        for (let i = start; i < end; i ++) {
            min = Math.min(min, start);
            max = Math.max(max, end);
            counts[i]++;
        }
    }
    const [a, b, c] = costs.split(' ').map(Number);
    let sum = 0;
    for (let i = min; i < max; i ++) {
        if (counts[i] === 1) sum += a;
        if (counts[i] === 2) sum += b * 2;
        if (counts[i] === 3) sum += c * 3;
    }
    return sum;
}
console.log(solution(nums, arr.map(v => v.split(' ').map(Number))));