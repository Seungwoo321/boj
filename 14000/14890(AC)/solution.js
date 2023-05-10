const filePath = './input';
const [nums, ...grid] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [N, L] = nums.split(' ').map(Number);
function solution (n, l, grid) {
    const canPass = (row, count) => {
        for (let i = 1; i < row.length; i ++) {
            if (row[i - 1] === row[i]) count++;
            else if (row[i - 1] + 1 === row[i] && count >= l) count = 1;
            else if (row[i - 1] - 1 === row[i] && count >= 0) count = -l + 1;
            else return 0;
        }
        return count >= 0;
    }
    const crossGrid = grid.map((r, i) => r.map((c, j) => grid[j][i]));
    const sum = (acc, cur) => acc + canPass(cur, 1);
    return grid.reduce(sum, 0) + crossGrid.reduce(sum, 0);
}
console.log(solution(N, L, grid.map(v => v.split(' ').map(Number))));