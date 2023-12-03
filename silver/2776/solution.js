const filePath = require('path').join(__dirname, 'input');
const [t, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (t, arr) {
    const answer = [];
    let i = 0;
    const binarySearch = (left, right, target, arr) => {
        let result = 0;
        let mid = 0;
        while (left <= right) {
            mid = Math.floor((left + right) / 2);
            if (arr[mid] > target) {
                right = mid - 1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else if (arr[mid] === target) {
                result = 1;
                break;
            } else {
                break;
            }
        }
        return result;
    }
    while (t--) {
        i++;
        const mArr = arr[i++].split(' ').map(Number).sort((a, b) => a - b);
        const n = +arr[i++];
        const nArr = arr[i++].split(' ').map(Number);
        for (let j = 0; j < n; j ++) {
            answer.push(binarySearch(0, n - 1, nArr[j], mArr));
        }
    }
    return answer.join('\n');
}
console.log(solution(+t, arr));