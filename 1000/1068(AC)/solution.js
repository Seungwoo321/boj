const filePath = require('path').join(__dirname, 'input');
const [n, nodes, target] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, nodes, target) {
    const graph = Array.from({ length: n }, () => []);
    let root = 0;
    for (let i = 0; i < n; i ++) {
        const parent = nodes[i];
        if (parent === -1) root = i;
        else if (i !== target && parent !== target) graph[parent].push(i);     
    }
    if (target === root) return 0;
    const queue = [root];
    let leaf = 0;
    while (queue.length) {
        const node = queue.shift();
        const childNodes = graph[node];
        childNodes.forEach(child => queue.push(child));
        if (!childNodes.length) leaf ++;
    }
    return leaf;
}
console.log(solution(+n, nodes.split(' ').map(Number), +target));