const filePath = require('path').join(__dirname, 'input');
const [N, ...W]  = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution (n, w) {
    const visited = new Array(n).fill(false);
    const shortestPath = (path, visited, currentLength) => {
        if (path.length === n) {
            return currentLength + w[path[path.length - 1]][path[0]];
        }

        let result = Infinity;
        for (let next = 1; next < n; next++) {
            if (visited[next]) continue;
            if (path.length === n - 1 && w[next][path[0]] === 0) continue;
            const here = path[path.length - 1];
            if (w[here][next] === 0) continue;
            path.push(next);
            visited[next] = true;
            result = Math.min(result, shortestPath(path, visited, currentLength + w[here][next]));
            visited[next] = false;
            path.pop();
        }
        return result;
    }
    return shortestPath([0], visited, w[0][0]);
}

console.log(solution(
    +N,
    W.map(r => r.split(' ').map(c => +c))
));