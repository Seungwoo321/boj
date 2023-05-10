const filePath = require('path').join(__dirname, 'input');
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, m] = num.split(' ');
function solution (n, m, arr) {
    const answer = [];
    const table = new Map();
    for (let i = 0; i < n; i ++) {
        table.set(arr[i], i + 1);
        table.set(i + 1 + '', arr[i]);
    }
    for (let j = n; j < n + m; j ++) {
        answer.push(table.get(arr[j]));
    }
    return answer.join('\n');
    // const table = {};
    // const answer = [];
    // for (let i = 0; i < n + m; i++) {
    //     if (i < n) {
    //         table[arr[i]] = i + 1;
    //         table[i + 1 + ''] = arr[i];
    //     } else {
    //         answer.push(table[arr[i]]);
    //     }
    // }
    // return answer.join('\n');

}
console.log(solution(+n, +m, arr));