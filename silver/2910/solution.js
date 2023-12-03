const filePath = require('path').join(__dirname, 'input');
const [num, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (arr) {
    const hashTable = arr.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    return arr.sort((a, b) => hashTable[b] - hashTable[a] || arr.indexOf(a) - arr.indexOf(b)).join(' ');
}
console.log(solution(arr.split(' ').map(Number)));