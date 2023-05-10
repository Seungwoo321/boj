const filePath = require('path').join(__dirname, 'input');
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (arr) {
    const isVowel = v => ['a', 'e', 'i', 'o', 'u'].includes(v);
    const answer = [];
    for (let i = 0; i < arr.length - 1; i ++) {
        const word = arr[i];
        let flag = true;
        let include = false
        let vowelCount = 0;
        let consCount = 0
        let prev = '';
        for (let j = 0; j < word.length; j ++) {
            if (!flag) break;
            const char = word[j];
            if (isVowel(char)) {
                vowelCount++;
                consCount = 0;
                if (!include) include = true
            } else {
                consCount++;
                vowelCount = 0;
            }
            if (vowelCount === 3 || consCount === 3) flag = false
            if (prev === char && prev !== 'e' && prev !== 'o') flag = false
            prev = char
        }
        if (!include) flag = false
        answer.push(`<${word}> is${!flag ? ' not ' : ' '}acceptable.`);
    }
    return answer.join('\n');
}
console.log(solution(input))