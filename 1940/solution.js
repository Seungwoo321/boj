const filePath = require('path').join(__dirname, 'input');
const [n, m, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, m, arr) {
    let left = 0;
    let right = arr.length - 1;
    let count = 0;
    while (left < right) {
        if (arr[left] + arr[right] < m) {
            left++;
        } else if (arr[left] + arr[right] > m) {
            right--
        } else {
            count++;
            left++;
            right--;
        }
    }

    // let count = 0;
    // for (let i = 0; i < n - 1; i ++) {
    //     for (let j = i + 1; j < n; j ++) {
    //         if (arr[i] + arr[j] === m) {
    //             count++;
    //         }
    //     }
    // }
    
    return count;

    
}
console.log(solution(+n, +m, arr.split(' ').map(Number).sort((a, b) => a - b)));