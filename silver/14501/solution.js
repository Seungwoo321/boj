const filePath = require('path').join(__dirname, 'input');
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function soluton (n, arr) {
    const recursive = (depth, sum, maxPoint) => {
        if (n <= depth) {
            return sum;
        }
        for (let i = depth; i < n; i ++) {
            if (i + arr[i][0] <= n) sum += arr[i][1];
            maxPoint = Math.max(maxPoint, recursive(i + arr[i][0], sum, maxPoint));
            if (i + arr[i][0] <= n) sum -= arr[i][1];
        }
        return maxPoint;
    }
    return recursive(0, 0, 0);
}

// console.log(soluton(+num, arr.map(r => r.split(' ').map(Number))));

function run (input) {
    const [num, ...arr] = input
        .toString()
        .trim()
        .split('\n')
        .map(r => r.trim());
        return soluton(+num, arr.map(r => r.split(' ').map(Number)));
}
module.exports = {
    run
}