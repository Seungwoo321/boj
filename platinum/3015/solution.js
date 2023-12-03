const filePath = './input';
const [N, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    const stack = [];
    let count = 0;
    for (let i = 0; i < n; i ++) {
        const m = +arr[i]
        let same = 1;
        while (stack.length && +stack[0][0] <= m) {
            count += stack[0][1];
            if (+stack[0][0] === m) same = stack[0][1] + 1
            else smae = 1;
            stack.shift();
        }
        if (stack.length) count++;
        stack.unshift([m, same]);
    }
    return count;
}
console.log(solution(Number(N), arr))