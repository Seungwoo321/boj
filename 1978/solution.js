const filePath = require('path').join(__dirname, 'input');
const [n, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    const m = Math.max.apply(null, arr)
    const primes = new Array(m + 1).fill(1);
    for (let i = 2; (i * i) <= m; i ++) {
        if (primes[i]) {
            for (let j = i * i; j <= m; j += i) {
                primes[j] = 0;
            }
        }
    }
    return arr.filter(v => v > 1 && primes[v]).length;
}
console.log(solution(+n, arr.split(' ').map(Number)));
