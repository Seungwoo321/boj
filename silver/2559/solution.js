const filePath = require('path').join(__dirname, 'input');
const [num, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, k] = num.split(' ');
function solution (n, k, arr) {

    // return Math.max(...arr.reduce((acc, cur, i) => {
    //     if (i < k) acc[0] += cur;
    //     else acc.push(acc[acc.length - 1] + cur - arr[i - k]);
    //     return acc;
    // }, [0]));

    // let sum = arr.slice(0, k).reduce((acc, cur) => acc + cur, 0);
    // let max = sum;
    // for (let i = k; i < n; i ++) {
    //     sum += arr[i] - arr[i - k];
    //     max = Math.max(max, sum);
    // }
    // return max;

    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    let max = sum;
    for (let i = k; i < n; i ++) {
        sum += arr[i] - arr[i - k];
        max = Math.max(max, sum);
    }
    return max;
}
console.log(solution(+n, +k, arr.split(' ').map(Number)));