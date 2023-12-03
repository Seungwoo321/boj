const filePath = require('path').join(__dirname, 'input');
const [n, m] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(' ');
function solution (n, m) {
    const combination = (function (n, r) {
        const results = [];
        const recursive = (n, r, depth, tmp = []) => {
            if (r === 0) {
                return results.push(tmp.join(' '));
            }
            for (let i = depth; i <= n; i ++) {
                tmp.push(i);
                recursive(n, r - 1, i, tmp);
                tmp.pop();
            }
        }
        recursive(n, r, 1);
        return results.join('\n');
    }(n, m));
    return combination;
}
console.log(solution(+n, +m));