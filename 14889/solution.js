const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    const teamScore = (start, link) => {
        let totalStart = 0;
        let toatlLink = 0;
        for (let i = 0; i < n / 2; i ++) {
            for (let j = 0; j < n / 2; j ++) {
                totalStart += +arr[start[i]][start[j]];
                toatlLink += +arr[link[i]][link[j]];
            }
        }
        return Math.abs(totalStart - toatlLink);
    }
    const countOnes = (num) => {
        let count = 0;
        while (num) {
            count += num & 1;
            num >>= 1;
        }
        return count;
    }

    let diff = Infinity;
    for (let i = 0; i < (1 << n); i ++) {
        if (countOnes(i) !== n /2) continue;
        const start = [];
        const link = [];
        for (let j = 0; j < n; j ++) {
            if (i & (1 << j)) start.push(j);
            else link.push(j);
        }
        diff = Math.min(diff, teamScore(start, link));
    }
    return diff;
}
console.log(solution(+n, arr.map(r => r.split(' '))));