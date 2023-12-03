const filePath = require('path').join(__dirname, 'input');
const [n, pattern, ...strArray] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, pattern, strArray) {
    const answer = [];
    const [start, end] = pattern.split('*');
    for (let i = 0; i < n; i ++) {
        const str = strArray[i];
        if (start.length + end.length > str.length) {
            answer.push('NE');
        } else if (str.startsWith(start) && str.endsWith(end)) {
            answer.push('DA');
        } else {
            answer.push('NE');
        }
    }
    return answer.join('\n');
}
console.log(solution(+n, pattern, strArray));