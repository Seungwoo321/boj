const filePath = require('path').join(__dirname, 'input');
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
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
    let start = 0;
    let count = 0;
    let num = 0;
    for (let i = 0; i < primes.length; i ++) {
        num += primes[i];
        while (num >= n) {
            if (num === n) count++;
            num -= primes[start++];
        }
    }
    return count;
}
console.log(solution(+input));