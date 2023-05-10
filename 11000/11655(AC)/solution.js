const filePath = require('path').join(__dirname, 'input')
const str = require('fs')
    .readFileSync(filePath)
    .toString();
// function solution (str) {
//     const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
//     let answer = [];
//     for (let i = 0; i < str.length; i++) {
//         const index = abc.indexOf(str[i]);
//         answer.push(index > -1 ? abc[index + 13] : str[i]);
//     }
//     return answer.join('');
// }
function solution(str) {
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
    return str.split('').reduce((acc, cur) => acc += (abc.indexOf(cur) > -1 ? abc[abc.indexOf(cur) + 13] : cur), '');
}
console.log(solution(str));