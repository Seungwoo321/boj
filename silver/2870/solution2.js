const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution(n, arr) {
    const answer = [];
    for (let i = 0; i < n; i++) {
        const nums = arr[i].match(/\d+/g);
        if (nums) answer.push(...nums);
    }
    answer.sort((a, b) => a - b);
    return answer.map(BigInt).join('\n');
}
console.log(solution(+n, arr));