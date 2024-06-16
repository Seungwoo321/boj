const filePath = require('path').join(__dirname, 'input');
const [...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(r => r.split(' ').map(n => +n))

arr.pop();

function solution (tests) {

    const results = [];
    const combination = (nums, r, depth, tmp) => {
        if (r === 0) {
            return results.push(tmp.join(' '));
        }
        for (let i = depth; i < nums.length; i ++) {
            tmp.push(nums[i]);
            combination(nums, r - 1, i + 1, tmp);
            tmp.pop();
        }
    }

    for (let i = 0; i < tests.length; i ++) {

        combination(tests[i].slice(1), 6, 0, []);
        results.push(' ');
    }
    return results.join('\n');
}

console.log(solution(arr));
