const filePath = require('path').join(__dirname, 'input');
const N = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim();
function solutio(n) {
    let count = 0;
    let digit = 1
    let max = 9;
    while (n > max) {
        n -= max;
        count += (max * digit);
        digit++;
        max *= 10;
    }
    return count + (n * digit);
}
console.log(solutio(+N));