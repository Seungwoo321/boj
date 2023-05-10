const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const dfs = (y1, x1, m, result) => {
    if (m === 1) return arr[y1][x1];
    const total = dfs(y1, x1, m / 2, result)
        + dfs(y1, x1 + m / 2, m / 2, result)
        + dfs(y1 + m / 2, x1, m / 2, result)
        + dfs(y1 + m / 2, x1 + m / 2, m / 2, result);
    if (total === '1111') return result + '1';
    if (total === '0000') return result + '0';
    return result + '(' + total + ')';
}
console.log(dfs(0, 0, +n, ''));