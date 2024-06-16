const filePath = require('path').join(__dirname, 'input');
const [...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(r => r.split(' ').map(n => +n));
arr.pop();
function solution (tests) {
    const combination = (nums, depth, tmp, result) => {
        if (tmp.length === 6) {
            return result + tmp.join(' ') + '\n';
        }
        for (let i = depth; i < nums.length; i ++) {
            result = combination(nums, i + 1, [...tmp, nums[i]], result);
        }
        return result
    }
    const answer = [];
    for (let i = 0; i < tests.length; i ++) {
        answer.push(combination(tests[i].slice(1), 0, [], ''));
    }
    return answer.join('\n');
}
console.log(solution(arr));
