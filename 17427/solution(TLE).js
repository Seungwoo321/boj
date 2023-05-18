const filePath = require('path').join(__dirname, 'input');
const n = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
function solution (n) {
    const memo = {}
    const fn = (N) => {
        if (memo[N]) return memo[N]
        let sum = 0;
        for (let i = 1; i <= Math.sqrt(N); i++) {
            if (N % i === 0) {
                sum += i;
                if (i !== N / i) sum += N / i;
            }
        }
        memo[N] = sum;
        return sum;
    }
    const gn = (N) => {
        let sum = 0;
        for (let i = 1; i <= N; i++) {
            sum += fn(i);
        }
        return sum;
    }
    
    return gn(n);
}
console.log(solution(+n));