const filePath = require('path').join(__dirname, 'input');
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim();

function solution (n) {
    const count = (m, sum) => {
        if (m < 0) return 0;
        if (m === 0) return sum;
        return  (count(m - 5, sum + 1) || count(m - 3, sum + 1))
    }
    return count(n, 0) || -1;
}

console.log(solution(+input));