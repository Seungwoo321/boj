const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    const answer = [];
    const nums = '0123456789';
    for (let i = 0; i < n; i ++) {
        let tmp = '';
        const str = arr[i];
        for (let j = 0; j < str.length; j ++) {
            const char = str[j];
            if (nums.indexOf(char) > -1) {
                tmp += char;
            } else if (tmp) {
                answer.push(tmp);
                tmp = ''
            }
            if (tmp.length > 1 && tmp.indexOf('0') === 0) tmp = tmp.substring(1)
        }
        if (tmp) answer.push(tmp);
    }
    return answer.sort((a, b) => a - b).join('\n');
}
console.log(solution(+n, arr));