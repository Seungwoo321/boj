// const filePath = '/dev/stdin';
const filePath = './input';
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [num, ...arr] = input
const [n, m, h] = num.split(' ').map(Number);
function solution(n, m, h, arr) {
    const visited = Array.from({ length: h + 1 }, () => new Array(n + 1).fill(0));
    let answer = Infinity;
    for (i = 0; i < m; i++) {
        const [y, x] = arr[i].split(' ').map(Number);
        visited[y][x] = 1;
    }
    const sameStart = () => {
        for (let j = 1; j <= n; j++) {
            let start = j;
            for (let i = 1; i <= h; i++) {
                if (visited[i][start]) start++;
                else if (visited[i][start - 1]) start--;
            }
            if (start !== j) return false;
        }
        return true;
    }
    const dfs = (depth, count) => {
        if (answer <= depth) return;
        if (depth === count) {
            if (sameStart()) answer = Math.min(answer, depth);
            return;
        }
        for (let j = 1; j < n; j++) {
            for (let i = 1; i <= h; i++) {
                if (visited[i][j] || visited[i][j - 1] || visited[i][j + 1]) continue;
                visited[i][j] = 1;
                dfs(depth, count + 1);
                visited[i][j] = 0;
                while (i <= h && !visited[i][j - 1] && !visited[i][j + 1]) i++;
            }
        }
    }
    for (let i = 0; i <= 3; i++) dfs(i, 0);
    return answer === Infinity ? -1 : answer;
}
console.log(solution(n, m, h, arr));