const filePath = require('path').join(__dirname, 'input');
const [N, ...W]  = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution (n, w) {
    const visited = new Array(n).fill(false);
    const shortestPath = (path, here) => {
        if (path === n) {
            return w[here][0] || Infinity;
        }
        let result = Infinity;
        for (let next = 1; next < n; next++) {
            if (visited[next]) continue;
            if (w[here][next] === 0) continue;
            visited[next] = true;
            result = Math.min(result, shortestPath(path + 1, next) + w[here][next]);
            visited[next] = false;
        }
        return result;
    }
    return shortestPath(1, 0);
}


console.log(solution(
    +N,
    W.map(r => r.split(' ').map(c => +c))
));