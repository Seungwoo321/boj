const [num, people, ...arr] = require('fs').readFileSync('./input').toString().trim().split('\n');
function solution(n, people, arr) {
    const total = people.reduce((acc, cur) => acc + cur, 0);
    const adj = Array.from({ length: n }, (_, i) => arr[i].slice(1).map(v => v - 1));
    const visited = new Array(n).fill(0);
    const area = new Array(n).fill(0);
    const dfs = (index, value) => {
        visited[index] = 1;
        return adj[index].reduce((acc, cur) => area[cur] === value && !visited[cur] ? acc + dfs(cur, value) : acc, people[index]);
    }
    let answer = Infinity;
    for (let i = 1; i < (1 << n) - 1; i++) {
        visited.fill(0);
        area.fill(0);
        const pos = [0, 0];
        for (let j = 0; j < n; j++) {
            area[j] = i & (1 << j) ? 1 : 0;
            pos[(i & (1 << j)) ? 0 : 1] = j;
        }
        const [area1, area2] = [dfs(pos[0], 1), dfs(pos[1], 0)];
        if (area1 + area2 === total) answer = Math.min(answer, Math.abs(area1 - area2));
    }
    return answer === Infinity ? -1 : answer;
}
console.log(solution(Number(num), people.split(' ').map(Number), arr.map(v => v.split(' ').map(Number))));
