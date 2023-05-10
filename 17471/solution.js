const filePath = './input';
const [num, people, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution(n, people, arr) {
    const total = people.reduce((acc, cur) => acc + cur, 0);
    const adj = Array.from({ length: n }, () => []);
    const visited = new Array(n).fill(0);
    const area = new Array(n).fill(0);
    for (let i = 0; i < n; i ++) {
        adj[i] = arr[i].slice(1).map(v => v - 1);
    }
    console.log(adj)
    function dfs (index, value) {
        visited[index] = 1;
        let sum = people[index];
        for (let i of adj[index]) {
            if (area[i] !== value) continue;
            if (visited[i]) continue;
            population = dfs(i, value);
            sum += population;
        }
        return sum;
    }
    let answer = Infinity;
    for (let i = 1; i < (1 << n) - 1; i ++) {
        visited.fill(0);
        area.fill(0);
        const pos = [0, 0];
        for (let j = 0; j < n; j ++) {
            if (i & (1 << j)) {
                pos[0] = j;
                area[j] = 1;
            } else {
                pos[1] = j;
            }
        }
        // console.log()
        // console.log(area.join(''))
        // console.log(pos[0], pos[1])
        const area1 = dfs(pos[0], 1);
        const area2 = dfs(pos[1], 0);
        if (area1 + area2 === total) {
            answer = Math.min(answer, Math.abs(area1 - area2));
        }
    }
    return answer === Infinity ? -1 : answer;
}
console.log(solution(Number(num), people.split(' ').map(Number), arr.map(v => v.split(' ').map(Number))));
