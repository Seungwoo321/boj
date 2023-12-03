const filePath = require('path').join(__dirname, 'input');
const [n, m] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(' ')
    .map(Number);
function solution (n, m) {
    const visited = new Array(n + 1).fill(0);
    const permutation = (n, r, depth, result, answer) => {
        if (r === depth) {
            answer += result.join(' ') + '\n';
            return answer;
        }
        for (let i = 1; i <= n; i ++) {
            if (visited[i]) continue;
            visited[i] = 1;
            result.push(i);
            answer = permutation(n, r, depth + 1, result, answer);
            result.pop();
            visited[i] = 0;
        }
        return answer;
    }
    return permutation(n, m, 0, [], '').trim();
}
console.log(solution(n, m));

module.exports = {
    solution
}