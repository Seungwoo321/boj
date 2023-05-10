const filePath = require('path').join(__dirname, 'input');
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution(n, nums, operArray) {
    const operators = operArray.reduce((acc, cur, i) => acc.concat(new Array(cur).fill(i)), []);
    const oper = [
        (a, b) => a + b,
        (a, b) => a - b,
        (a, b) => a * b,
        (a, b) => a < 0 && b > 0 ? Math.floor((a * -1) / b) * -1 : Math.floor(a / b)
    ];
    const permutaton = (r, depth, [max, min]) => {
        if (depth === r) {
            const value = nums.reduce((acc, cur, i) => {
                if (i == 0) return cur;
                return oper[operators[i - 1]](acc, cur);
            }, 0);
            return [Math.max(max, value), Math.min(min, value)];
        }
        for (let i = depth; i < r; i++) {
            [operators[i], operators[depth]] = [operators[depth], operators[i]];
            [max, min] = permutaton(r, depth + 1, [max, min]);
            [operators[i], operators[depth]] = [operators[depth], operators[i]];
        }
        return [max, min];
    }
    return permutaton(operators.length, 0, [-Infinity, Infinity]).join('\n');
}
console.log(solution(+input[0], input[1].split(' ').map(Number), input[2].split(' ').map(Number)));