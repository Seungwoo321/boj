const filePath = require('path').join(__dirname, 'input');
const [n, arr, x] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr, x) {
    arr.sort((a, b) => a - b);
    let count = 0;
    let left = 0;
    let right = n -1;
    while (left < right) {
        let result = arr[left] + arr[right];
        if (result < x) {
            left ++;
        } else if (result > x) {
            right --;
        } else {
            count++;
            left++;
            right--;
        }
    } 
    return count;
}
console.log(solution(+n, arr.split(' ').map(Number), +x));