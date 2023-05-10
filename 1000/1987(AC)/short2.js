const [n, ...a] = require('fs').readFileSync('./input').toString().trim().split('\n');
const [r, c, m, ds] = [...n.split(' ').map(Number), a.map(r => r.split('').map(v => v.charCodeAt(0) - 64)), [[-1, 0], [0, 1], [1, 0], [0, -1]]];
const cd = (y, x) => (1 << m[y][x]);
const dfs = (y, x, cnt, ret, sum) => ds.reduce((acc, cur) => cur[0] + y < 0 || cur[0] + y >= r || cur[1] + x < 0 || cur[1] + x >= c || sum + cd(y, x) & cd(cur[0] + y, cur[1] + x) ? acc : Math.max(cnt + 1, dfs(cur[0] + y, cur[1] + x, cnt + 1, acc, sum + cd(y, x))), ret);
console.log(dfs(0, 0, 1, 1, 0));