const filePath = require('path').join(__dirname, 'input');
const n = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim();

function solution (n) {
    const MOD = 10007
    const cache = new Array(n + 1).fill(-1)
    const tiling = (width) => {
        if (width <= 1) return 1;
        let result = cache[width];
        if (result !== -1) return result;
        return cache[width] = (tiling(width - 2) + tiling(width - 1)) % MOD;
    }
    return tiling(n);
}
console.log(solution(+n));