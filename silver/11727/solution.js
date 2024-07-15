const filePath = require('path').join(__dirname, 'input');
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim();

function solution (n) {
    const MOD = 10007;
    const cache = {};
    const tiling = (width) => {
        if (width <= 1) return 1;
        if (width === 2) return 3;
        if (cache[width]) return cache[width];
        cache[width] = ((tiling(width - 2) * 2) + tiling(width - 1)) % MOD
        return cache[width];
    }
    return tiling(n);
}
console.log(solution(+input));