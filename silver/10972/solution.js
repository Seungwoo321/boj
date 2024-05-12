const filePath = require('path').join(__dirname, 'input');
const [num, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution (n, arr) {
    let i = n - 1;
    while (arr[i - 1] >= arr[i]) i--;
    if (i <= 0) return -1;
    let j = n - 1;
    while (arr[j] <= arr[i - 1]) j--;
    swap(arr, i - 1, j);
    return arr.splice(0, i).join(' ') + ' ' + arr.reverse().join(' ');
}
const swap = (arr, i, j) => {
    // let tmp = arr[i];
    // arr[i] = arr[j];
    // arr[j] = tmp;
    [arr[i], arr[j]] = [arr[j], arr[i]];   
}
console.log(solution(+num, arr.split(' ').map(Number)));