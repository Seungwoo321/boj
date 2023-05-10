const filePath = require('path').join(__dirname, 'input');
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim();
function solution (n) {
    const sieveOfEratosthenes = (n) => {
        const primes = [];
        const nums = Array.from({ length: n + 1 }, () => true)
        for (let i = 2; i <= n; i++) {
            if (nums[i]) {
                primes.push(i);
                for (let j = i * i; j <= n; j += i) {
                    nums[j] = false;
                }
            }
        }
        return primes;
    }
    const primes = sieveOfEratosthenes(n);
    let count = 0;
    let num = primes[0];
    let start = 0;
    let end = 0;
    while (start <= end) {
        if (start === primes.length || end === primes.length) break;
        if (num >= n) {
            count += (num === n);
            num -= primes[start++];
        } else {
            num += primes[++end];
        }
    }
    return count;
}
console.log(solution(+input));