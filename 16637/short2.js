// const filePath = '/dev/stdin';
console.log(solution(require("fs").readFileSync('./input').toString().trim().split("\n")[1]));
function solution(str) {
    const d = str.split('').reduce((acc, cur, i) => (i % 2 === 0 ? acc.nums.push(Number(cur)) : acc.sign.push(cur)) && acc, { nums: [], sign: []});
    const calc = (n1, sign, n2) => ({ '+': n1 + n2, '-': n1 - n2, '*': n1 * n2 }[sign]);
    const oper = (i, num) => (!(i + 1 in d.nums)) ? num : Math.max(oper(i + 1, calc(num, d.sign[i], d.nums[i + 1])), (i + 2) in d.nums ? oper(i + 2, calc(num, d.sign[i], calc(d.nums[i + 1], d.sign[i + 1], d.nums[i + 2]))) : -Infinity);
    return oper(0, d.nums[0]);
}