const filePath = require('path').join(__dirname, 'input');
const [t, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (t, arr) {
    let m = 1e6 + 1; // Math.max.apply(null, arr)
    const sieveOfEratosthenes = (n) => {
        const primes = new Array(n + 1).fill(1)
        for (let i = 2; i <= n; i++) {
            for (let j = 1; j * i <= n; j ++) {
                primes[i * j] += i;
            }
            primes[i] += primes[i - 1]
        }
        return primes;
    }
    const dp = sieveOfEratosthenes(m);
    const answer = [];
    let i = 0;
    while (i < t) {
        answer.push(dp[arr[i++]]);
    }
    return answer.join('\n');
}
console.log(solution(+t, arr.map(Number)));