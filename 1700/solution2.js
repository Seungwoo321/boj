const filePath = require('path').join(__dirname, 'input');
const [num, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, k] = num.split(' ');
function solution (n, k, arr) {
    let count = 0;
    const visited = new Array(k + 1).fill(0);
    let plugins = []
    for (let i = 0; i < k; i ++) {
        if (visited[arr[i]]) continue;
        if (plugins.length === n) {
            let lastIndex = 0;
            let value = 0;
            plugins.forEach(p => {
                let select = arr.findIndex((v, j) => v === p && j > i);
                select = select === -1 ? Infinity : select + i + 1
                if (lastIndex < select) {
                    lastIndex = select;
                    value = p;
                }
            })
            visited[value] = 0;
            count++;
            plugins = plugins.filter(v => v !== value);
        }
        plugins.push(arr[i]);
        visited[arr[i]] = 1;
    }
    return count;
}
console.log(solution(+n, +k, arr.split(' ').map(Number)));