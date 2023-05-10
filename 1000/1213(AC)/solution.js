const filePath = require('path').join(__dirname, 'input');
const name = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim();
function solution (name) {
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const arr = new Array(26).fill(0);
    for (let i = 0; i < name.length; i ++) {
        arr[abc.indexOf(name[i])]++;
    }
    let answer = [];
    let center = '';
    for (let j = 0; j < arr.length; j ++) {
        if (arr[j] === 0) continue;
        if (arr[j] % 2 === 1) center += abc[j];
        answer.push(abc[j].repeat(arr[j] / 2))
    }
    return center.length > 1 ? "I'm Sorry Hansoo" : answer.join('') + center + answer.reverse().join('');
}
console.log(solution(name));