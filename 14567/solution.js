const filePath = './input';
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, m] = num.split(' ').map(Number);
function solution (n, m, arr) {
    const graph = Array.from({ length: n + 1 }, () => []);
    const indegress = new Array(n + 1).fill(0)
    const result = new Array(n).fill(1)
    for (let [from, to] of arr) {
        graph[from].push(to);
        indegress[to]++;
    }
    const queue = [];
    for (let i = 1; i <= n; i ++) {
        if (!indegress[i]) {
            queue.push(i);
        }
    }
    let j = 0;
    while (j < queue.length) {
        const to = queue[j++];
        for (let node of graph[to]) {
            if (--indegress[node] === 0) {
                result[node - 1] = result[to - 1] + 1;
                queue.push(node);
            }
        }
    }
    return result.join(' ');
}
console.log(solution(n, m, arr.map(v => v.split(' ').map(Number))));