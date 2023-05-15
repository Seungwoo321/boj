const filePath = require('path').join(__dirname, 'input');
const [...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(Number);
arr.pop();
function solution (arr) {
    const max = Math.max.apply(null, arr);
    const eratos = n => {
        const primes = new Array(n + 1).fill(1);
        for (let i = 2; (i * i) <= n; i ++) {
            if (primes[i]) {
                for (let j = i * i; j <= n; j += i) {
                    primes[j] = 0;
                }
            }
        }
        return primes;
    }
    const primes = eratos(max);
    const answer = [];
    for (let i = 0; i < arr.length; i ++) {
        const n = arr[i];
        for (let j = 3; j < n; j ++) {
            if (primes[j]) {
                const k = arr[i] - j;
                if (primes[k]) {
                    answer.push(`${arr[i]} = ${j} + ${k}`);
                    break;
                }
            }
        }
    }
    return answer.join('\n');
}
console.log(solution(arr));