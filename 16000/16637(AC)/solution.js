// const filePath = '/dev/stdin';
const filePath = './input';
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");
const str = input[1]

console.log(solution(str));

function solution(str) {
    const nums = [];
    const oper = [];
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            nums.push(Number(str[i]));
        } else {
            oper.push(str[i]);
        }
    }
    const calc = (num1, oper, num2) => {
        if (oper === '+') return num1 + num2;
        if (oper === '-') return num1 - num2;
        if (oper === '*') return num1 * num2;
    }
    const computing = (i, num) => {
        if (!(i + 1 in nums)) return num;
        const firstCalc = computing(i + 1, calc(num, oper[i], nums[i + 1]));
        const secondCalc = (i + 2) in nums ? computing(i + 2, calc(num, oper[i], calc(nums[i + 1], oper[i + 1], nums[i + 2]))) : -Infinity
        return Math.max(firstCalc, secondCalc);
    }
    return computing(0, nums[0]);
}