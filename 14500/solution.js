const filePath = require('path').join(__dirname, 'input');
const [n, m, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, m, arr) {

}
console.log(solution(+n, +m, arr.map(r => r.split(' ').map(Number))));

module.exports = {
    solution
};