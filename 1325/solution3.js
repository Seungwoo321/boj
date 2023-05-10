const filePath = require('path').join(__dirname, 'input');
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, m] = num.split(' ').map(Number);
function solution(n, m, arr) {
    const graph = Array.from({ length: n + 1 }, () => []);
    const visited = new Array(n + 1).fill(0);
    const dp = new Array(n + 1).fill(0);
    for (let i = 0; i < m; i++) {
        const [child, parent] = arr[i].split(' ');
        graph[+parent].push(+child);
    }
    const dfs = (i) => {
        visited[i] = 1;
        let count = 1;
        for (let v of graph[i]) {
            if (visited[v]) continue;
            count += dfs(v);
        }
        return count;
    }
    let maxCount = 0;
    let answer = [];
    for (let i = 1; i <= n; i++) {
        visited.fill(0);
        dp[i] = dfs(i);
        maxCount = Math.max(maxCount, dp[i])
    }
    for (let i = 1; i <= n; i ++) {
        if (maxCount === dp[i]) {
            answer.push(i);
        }
    }
    return answer.join(' ');
}
console.log(solution(+n, +m, arr));