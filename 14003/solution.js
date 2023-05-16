const filePath = require('path').join(__dirname, 'input');
const [n, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    const lis = new Array(n + 1).fill(0);
    const tmp = [0, arr[0]];
    const insertIndex = value => {
        let left = 0;
        let right = tmp.length
        let index = 0;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (tmp[mid] < value) {
                left = mid + 1;
                // index = mid;
            } else {
                right = mid - 1;
                index = mid
            }
        }
        return index;
    }
    const answer = []
    for (let i = 1; i < n; i++) {
        const index = insertIndex(arr[i]);
        tmp[index] = arr[i];
        lis[i] = lis[index] + 1;
        console.log(tmp)
        console.log(lis)
    }

    // return [lis.length, lis.join(' ')].join('\n');
}
console.log(solution(+n, arr.split(' ').map(Number)));