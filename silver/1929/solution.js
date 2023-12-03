const filePath = require('path').join(__dirname, 'input');
const [m, n] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(' ')
    .map(Number);
function solution (m, n) {
    const primes = new Array(n + 1).fill(1);
    for (let i = 2; (i * i) <= n; i ++) {
        if (primes[i]) {
            for (let j = i * i; j <= n; j += i) {
                primes[j] = 0;
            }
        }
    }
    const answer = [];
    for (let i = m; i <= n; i ++) {
        if (i > 1 && primes[i]) {
            answer.push(i);
        }
    }
    return answer.join('\n');
}
console.log(solution(m, n));