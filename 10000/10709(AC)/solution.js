const filePath = require('path').join(__dirname, 'input');
const [nums, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [h, w] = nums.split(' ');
function solution (h, w, arr) {
    const results = Array.from({ length: h }, () => new Array(w).fill(-1));
    for (let i = 0; i < h; i ++) {
        let isCloud = false;
        for (let j = 0; j < w; j ++) {
            if (arr[i][j] === 'c') {
                isCloud = true;
                results[i][j]++;
            } else if (isCloud) {
                results[i][j] = results[i][j - 1] + 1;
            }
        }
    }
    return results.map(r => r.join(' ')).join('\n');
}
console.log(solution(+h, +w, arr));