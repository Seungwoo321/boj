// const filePath = '/dev/stdin';
const filePath = require('path').join(__dirname, 'input')
const [n, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .split('\n');
const node = arr.split(' ');
const tree = [];
const dfs = (depth, left, right) => {
    if (depth === +n) return;
    const mid = left + Math.floor((right - left) / 2);
    tree[depth] = (tree[depth] || '') + node[mid] + ' ';
    dfs(depth + 1, left, mid)
    dfs(depth + 1, mid + 1, right);
}
dfs(0, 0, node.length - 1);
console.log(tree.join('\n'));