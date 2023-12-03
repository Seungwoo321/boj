const filePath = require('path').join(__dirname, 'input');
const [...num] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(Number);
function solution (num) {
    let answer = [];
    for (let i = 0; i < num.length; i ++) {
        let j = 1;
        let n = num[i];
        let m = 1;
        while (true) {
            if (m % n === 0) break;
            m = (m * 10) + 1;
            m %= n;
            j++;
        }
        answer.push(j);
    }
    return answer.join('\n');
}
console.log(solution(num));