const filePath = './input';
const [N, ...arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');
console.log(arr
    .map(v => v.split(' ').map(Number))
    .sort((a, b) => a[1] - b[1] || a[0] - b[0])
    .reduce((acc, cur) => acc[0] <= cur[0] ? [cur[1], acc[1] + 1] : [acc[0], acc[1]], [0, 0])[1]
);
