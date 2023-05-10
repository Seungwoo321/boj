const filePath = require('path').join(__dirname, 'input');
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution(n, nums, operArray) {
    const oper = [
        (a, b) => a + b,
        (a, b) => a - b,
        (a, b) => a * b,
        (a, b) => a < 0 && b > 0 ? Math.floor((a * -1) / b) * -1 : Math.floor(a / b)
    ];
    const dfs = (depth, value, answers) => {
        if (depth === n - 1) {
            return [Math.max(answers[0], value), Math.min(answers[1], value)];
        }
        for (let i = 0; i < 4; i++) {
            if (operArray[i]) {
                operArray[i]--;
                answers = dfs(depth + 1, oper[i](value, nums[depth]), answers);
                operArray[i]++;
            }
        }
        return answers;
    }
    return dfs(0, nums.shift(), [-Infinity, Infinity]).join('\n');
}
console.log(solution(+input[0], input[1].split(' ').map(Number), input[2].split(' ').map(Number)));