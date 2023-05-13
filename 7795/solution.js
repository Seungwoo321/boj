const filePath = require('path').join(__dirname, 'input');
const [t, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (t, arr) {
    const findPair = (bArr, target) => {
        let left = 0;
        let right = bArr.length;
        let count = 0;
        while (left <= right) {
            let mid = Math.ceil((left + right) / 2);
            if (bArr[mid] < target) {
                count = mid + 1;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return count;
    }
    let i = 0;
    const answer = [];
    while (t --) {
        const [n, m] = arr[i++].split(' ').map(Number);
        const aArr = arr[i++].split(' ').map(Number);
        const bArr = arr[i++].split(' ').map(Number).sort((a, b) => a - b);
        let sum = 0;
        for (let i = 0; i < n; i ++) {
            sum += findPair(bArr, aArr[i]);
        }
        answer.push(sum);
    }
    return answer.join('\n');
}
console.log(solution(+t, arr));