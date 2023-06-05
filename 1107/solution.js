const filePath = require('path').join(__dirname, 'input');
const [n, m, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, m, arr) {
    const broken = new Array(10).fill(0)
    for (let i = 0; i < m; i ++) {
        broken[arr[i]] = 1;
    }
    const directInput = (channel) => {
        
    }
    directInput(n)
}
console.log(solution(+n, +m, arr.split(' ').map(Number)));