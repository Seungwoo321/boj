const filePath = require('path').join(__dirname, 'input');
const [num, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(r => r.split(' '));

function solution (l, c, arr) {
    arr.sort();
    const result = [];
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    const checkPassword = (password) => {
        const vowelCount = vowel.reduce((acc, cur) => acc + (password.includes(cur)), 0);
        return vowelCount > 0 && password.length - vowelCount > 1
    }
    const permutation = (n, r, index, depth, tmp) => {
        if (depth === r) {
            const password = tmp.join('');
            if (checkPassword(password)) {
                result.push(password);
            }
            return;
        }
        for (let i = index; i < n; i ++) {
            tmp[depth] = arr[i];
            permutation(n, r, i + 1, depth + 1, tmp);
        }
    }
    permutation(c, l, 0, 0, []);
    return result.join('\n');
}
// console.log(solution(...num.map(Number), arr));




// test
function run (input) {
    const [num, arr] = input
        .toString()
        .trim()
        .split('\n')
        .map(r => r.trim().split(' '));
    return solution(...num.map(Number), arr);
}
module.exports = {
    run
}