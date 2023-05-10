const filePath = require('path').join(__dirname, 'input');
const [...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution(arr) {
    arr.sort((a, b) => a - b);
    const target = arr.reduce((acc, cur) => acc + cur, 0) - 100;
    const bfs = (i) => {
        const queue = [[0, 1]];
        while (i < queue.length) {
            const [y, x] = queue[i++];
            if (arr[y] + arr[x] === target) {
                return arr.filter(v => v !== arr[y] && v !== arr[x]).join('\n');
            }
            queue.push([y + 1, x]);
            queue.push([y, x + 1]);
        }
    }
    return bfs(0);
}
console.log(solution(arr.map(Number)));