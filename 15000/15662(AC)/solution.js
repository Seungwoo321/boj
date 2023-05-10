const filePath = require('path').join(__dirname, 'input');
const [t, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (t, tArr, k, kArr) {
    const rotate = (start, direction) => {
        if (direction) {
            tArr[start].unshift(tArr[start].pop());
        } else {
            tArr[start].push(tArr[start].shift());
        }
    }
    const findLeft = (end) => {
        for (let i = end; i >= 1; i --) {
            if (tArr[i - 1][2] === tArr[i][6]) {
                return i;
            }
        }
        return 0;
    }
    const findRight = (start) => {
        for (let i = start; i <= t - 2; i ++) {
            if (tArr[i][2] === tArr[i + 1][6]) {
                return i
            }
        }
        return t - 1;
    }
    for (let i = 0; i < k; i ++) {
        let [target, direction] = kArr[i];
        direction = direction === '-1' ? 0 : 1;
        target--;
        const l = findLeft(target);
        const r = findRight(target);
        let count = 0;
        for (let j = target; j >= l; j --) {
            rotate(j, count % 2 === 0 ? direction : !direction);
            count++;
        }
        count = 1;
        for (let j = target + 1; j <= r; j ++) {
            rotate(j, count % 2 === 0 ? direction : !direction);
            count++;
        }
    }
    return tArr.filter(r => r[0] === '1').length;
}
console.log(solution(+t, arr.slice(0, t).map(r => r.split('')), +arr[+t], arr.slice(+t + 1).map(r => r.split(' '))))