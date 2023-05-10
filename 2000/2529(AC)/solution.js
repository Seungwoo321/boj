const filePath = './input';
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .split('\n');
function solution (arr) {
    const isValid = (n1, n2, oper) => ({ '<': n1 < n2, '>': n1 > n2 }[oper]);
    const visited = new Array(10).fill(0);
    let maxStr = '';
    let minStr = (9).toString().repeat(arr.length + 1);
    const dfs = (i, str) => {
        if (arr.length + 1 === str.length) {
            if (minStr > str) minStr = str;
            if (maxStr < str) maxStr = str;
            return;
        }
        for (let j = 0; j < 10; j ++) {
            if (visited[j]) continue;
            if (i === 0 || isValid(str[i - 1], j, arr[i - 1])) {
                visited[j] = 1;
                dfs(i + 1, str + '' + j);
                visited[j] = 0;
            }
        }
    }
    dfs(0, '');
    return maxStr + '\n' + minStr;
}
console.log(solution(input[1].split(' ')));