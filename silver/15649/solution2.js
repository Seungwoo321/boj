const filePath = require('path').join(__dirname, 'input');
const [n, m] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(' ')
    .map(Number);
function solution(n, m) {
    const arr = Array.from({ length: n }, (_, i) => i + 1);
    const permutation = (n, r, depth, result) => {
        if (r === depth) {
            result.push(arr.slice(0, r).join(' '));
            return;
        }
        for (let i = depth; i < n; i++) {
            [arr[i], arr[depth]] = [arr[depth], arr[i]];
            permutation(n, r, depth + 1, result);
            [arr[i], arr[depth]] = [arr[depth], arr[i]];
        }
        return result;
    }
    return permutation(n, m, 0, []).sort().join('\n');
}
console.log(solution(n, m));