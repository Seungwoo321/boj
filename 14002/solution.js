const filePath = require('path').join(__dirname, 'input');
const [n, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    const lis = [arr[0]];
    const indexes = [1];
    const lowerBound = (value, list) => {
        let left = 0;
        let right = list.length
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (list[mid] < value) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }
    for (let i = 1; i < n; i ++) {
        const index = lowerBound(arr[i], lis);
        if (index === lis.length) lis.push(arr[i]);
        else lis[index] = arr[i];
        indexes.push(index + 1);
    }
    const answer = [];
    let j = indexes.length - 1;
    while (answer.length < lis.length) {
        if (indexes[j] === lis.length - answer.length) {
            answer.push(arr[j]);
        }
        j--;
    }
    return [
        lis.length,
        answer.reverse().join(' ')
    ].join('\n');
}
console.log(solution(n, arr.split(' ').map(Number)));