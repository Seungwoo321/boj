// const filePath = '/dev/stdin';
const filePath = './input'
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .split('\n');
function solution (level, arr) {
    const tree = Array.from({ length: level }, () => []);
    const dfs = (i, subArr, tree) => {
        if (!(i in tree)) return tree;
        const mid = parseInt(subArr.length / 2);
        tree[i] += subArr[mid] + ' ';
        if (subArr.length === 1) return tree;
        dfs(i + 1, subArr.slice(0, mid), tree);
        dfs(i + 1, subArr.slice(mid + 1), tree);
        return tree;
    }
    return dfs(0, arr, tree).join('\n');
}
console.log(solution(parseInt(input[0]), input[1].split(' ')))