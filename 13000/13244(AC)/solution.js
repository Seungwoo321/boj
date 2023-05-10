const filePath = './input';
const [T, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// const input = [];
// rl.on("line", (line) => input.push(line.trim()));
// rl.on("close", () => solution(Number(input[0]), input.slice(1)) && process.exit());

function solution (t, arr) {
    const answer = [];
    const dfs = (i, graph, visited) => {
        const queue = [...graph[i]];
        while (queue.length) {
            const n = queue.shift();
            if (visited[n]) continue;
            visited[n] = 1;
            queue.push(...graph[n]);
        }
        // visited[i] = 1;
        // for (let n of graph[i]) {
        //     if (visited[n]) continue;
        //     dfs(n, graph, visited);
        // }
    }
    while (t--) {
        const [v, e] = [Number(arr.shift()), Number(arr.shift())];
        const graph = Array.from({ length: v }, () => []);
        const visited = new Array(e).fill(0);
        for (let i = 0; i < e; i++) {
            const [v1, v2] = arr.shift().split(' ').map(v => Number(v) - 1);
            graph[v1].push(v2);
            graph[v2].push(v1);
        }
        let count = 0;
        for (let i = 0; i < v; i++) {
            if (visited[i]) continue;
            dfs(i, graph, visited);
            count ++;
        }
        count === 1 && e === v - 1 ? answer.push('tree') : answer.push('graph');
    }
    console.log(answer.join('\n'))
}
solution(Number(T), arr);