const filePath = require('path').join(__dirname, 'input');
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function soluton (n, arr) {
    let maxCost = 0;
    const recursive = (depth, next, tmp) => {
        if (depth + next >= n) {
            console.log(tmp);
            return
        }

        for (let i = depth + next; i < n; i ++) {
            tmp.push(arr[i][1]);
            recursive(depth + next, arr[i][0], tmp);
            tmp.pop();
        }
    }
    recursive(0, 0, []);
    return maxCost

}

console.log(soluton(num, arr.map(r => r.split(' ').map(Number))));