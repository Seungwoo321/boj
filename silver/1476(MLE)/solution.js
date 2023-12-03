const filePath = require('path').join(__dirname, 'input')
const [E, S, M] = require('fs')
    .readFileSync(filePath)
    .toString()
    .split(' ')
    .map(Number);
let year = 1;
while ((year - E) % 15 || (year - S) % 28 || (year - M) % 19) {
    year++;
}
console.log(year);