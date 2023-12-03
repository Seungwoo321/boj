const filePath = require('path').join(__dirname, 'input');
const nums = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(' ')
    .map(Number);
function solution(nums) {
    let ascending = true;
    let descending = true;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            descending = false;
        } else if (nums[i] < nums[i - 1]) {
            ascending = false;
        }
    }
    return ascending ? 'ascending' : (descending ? 'descending' : 'mixed');
}
console.log(solution(nums));
