const filePath = require('path').join(__dirname, 'input');
const [...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution (arr) {
    arr.sort((a, b) => a - b);
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    for (let i = 0; i < arr.length; i ++) {
        for (let j = i + 1; j < arr.length; j ++) {
            if (sum - arr[i] - arr[j] === 100) {
                return arr.filter(v => v !== arr[i] && v != arr[j]).join('\n');
            }
        }
    }
}
console.log(solution(arr.map(Number)));