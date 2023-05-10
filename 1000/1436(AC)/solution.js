const filePath = require('path').join(__dirname, 'input');
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('/n');
function solution (n) {
    let start = 665;
    while (start++) {
        if (start.toString().indexOf('666') > -1) n--;
        if (n === 0) break;
    }
    return start;
    // let start = 666;
    // let i = 1;
    // while (i < n) {
    //     start ++;
    //     if (start.toString().indexOf('666') > -1) {
    //         i++;
    //     }
    // }
    // return start;
}
console.log(solution(+input));