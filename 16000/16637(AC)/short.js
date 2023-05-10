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
    const data = str.split('').reduce((acc, cur, i) => (i % 2 === 0 ? acc.nums.push(Number(cur)) : acc.oper.push(cur)) && acc, { nums: [], oper: []});
    const calc = (num1, oper, num2) => ({ '+': num1 + num2, '-': num1 - num2, '*': num1 * num2 }[oper])
    const computing = (i, num) => (!(i + 1 in data.nums)) ? num : Math.max(computing(i + 1, calc(num, data.oper[i], data.nums[i + 1])), (i + 2) in data.nums ? computing(i + 2, calc(num, data.oper[i], calc(data.nums[i + 1], data.oper[i + 1], data.nums[i + 2]))) : -Infinity);
    return computing(0, data.nums[0]);
}