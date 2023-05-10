const filePath = './input';
const [nums, ...grid] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [N, L] = nums.split(' ').map(Number)
function solution (n, l, grid) {
    const canPass = (arr, answer) => {
        for (let i = 0; i < arr.length; i ++) {
            let count = 1;
            for (let j = 1; j < arr[i].length; j++) {
                if (arr[i][j - 1] === arr[i][j]) count++;
                else if (arr[i][j - 1] + 1 === arr[i][j] && count >= l) count = 1;
                else if (arr[i][j - 1] - 1 === arr[i][j] && count >= 0) count = -l + 1;
                else break;
                if (j === arr[i].length - 1 && count >= 0) answer++;;
            }
        }
        return answer;
    }
    const crossGrid = grid.map((r, i) => r.map((c, j) => grid[j][i]));
    return canPass(grid, 0) + canPass(crossGrid, 0);
}
console.log(solution(N, L, grid.map(v => v.split(' ').map(Number))));