const filePath = './input';
const [num, ...coins] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, coins) {
    const bits = new Array(n).fill(0);
    function minimumT (index, minT) {
        if (index === n) {
            let sum = 0;
            for (let i = 1; i < (1 << n); i *= 2) {
                let count = 0;
                for (let j = 0; j < n; j ++) {
                    if (bits[j] & i) count ++;
                }
                sum += Math.min(count, n - count);
            }
            return Math.min(minT, sum);
        }
        minT = minimumT(index + 1, minT);
        bits[index] = ~bits[index];
        minT = minimumT(index + 1, minT);
        return minT;
    }
    for (let i = 0; i < n; i ++) {
        let value = 1;
        for (let j = 0; j < n; j ++) {
            if (coins[i][j] === 'T') bits[i] |= value;
            value *= 2;
        }
    }
    return minimumT(0, Infinity);
}
console.log(solution(Number(num), coins));