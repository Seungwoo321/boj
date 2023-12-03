const filePath = './input'
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [N, M] = num.split(' ')
function solution (n, m, arr) {
    const graph = Array.from({ length: n }, () => []);
    const visited = new Array(n).fill(0);
    for (let i = 0; i < m; i ++) {
        const friend = arr[i];
        graph[friend[0]].push(friend[1]);
        graph[friend[1]].push(friend[0]);
    }
    let answer = 0
    const dfs = (index, depth) => {
        if (answer === 1) return;
        if (depth === 5) {
            answer = 1;
            return
        }
        visited[index] = 1;
        for (let num of graph[index]) {
            if (visited[num]) continue;
            dfs(num, depth + 1);
        }
        visited[index] = 0;
    }
    for (let j = 0; j < n; j ++) {
        dfs(j, 1);
        if (answer) break;
    }
    return answer;
}
console.log(solution(+N, +M, arr.map(r => r.split(' ').map(Number))));