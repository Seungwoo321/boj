const filePath = require('path').join(__dirname, 'input');
// const filePath = '/dev/stdin';
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const isVowel = (word) => (/[aeiou]/g).test(word);
const isContinuous = (word) => (/[aeiou]{3}/g).test(word) || (/[^aeiou]{3}/g).test(word);
const isSame = (word) => {
    let prev = '';
    for (let i = 0; i < word.length; i++) {
        if (prev !== 'e' && prev !== 'o' && prev === word[i]) {
            return true
        }
        prev = word[i];
    }
    return false;
}
for (let i = 0; i < input.length - 1; i++) {
    console.log(`<${input[i]}> is${(!isVowel(input[i]) || isContinuous(input[i]) || isSame(input[i])) ? ' not ' : ' '}acceptable.`);
}