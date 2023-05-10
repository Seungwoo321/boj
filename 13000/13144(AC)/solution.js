const filePath = require('path').join(__dirname, 'input');
const [n, nums] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    let visited = new Array(n + 1).fill(0);
    let count = 0;
    let left = 0;
    let right = 0;
    while (right < n) {
        if (visited[arr[right]]) {
            count += (right - left);
            visited[arr[left]]--;
            left++;
        } else {
            visited[arr[right]]++;
            right++;
        }
    }
    return count + (right - left) * (right - left + 1) / 2
}
console.log(solution(+n, nums.split(' ')))