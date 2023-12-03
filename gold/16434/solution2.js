const filePath = require('path').join(__dirname, 'input');
const [nums, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, atk] = nums.split(' ').map(BigInt);
function solution (n, atk, arr) {
    const dungeonClear = (value) => {
        let curHp = value;
        let curAtk = atk;
        for (const [t, a, h] of arr) {
            if (t === 1n) {
                curHp -= (h / curAtk - (h % curAtk === 0n ? 1n : 0n)) * a;
                if (curHp < 1n) break;
            } else {
                curAtk += a;
                curHp += h
                if (curHp > value) curHp = value;
            }
        }
        return curHp > 0n;
    }
    let left = 1n;
    let right = 1000000000000000000n;
    let min = 0n;
    while (left <= right) {
        const mid = (left + right) / 2n;
        if (dungeonClear(mid)) {
            right = mid - 1n;
            min = mid;
        } else {
            left = mid + 1n;
        }
    }
    return min.toString();
}
console.log(solution(n, atk, arr.map(r => r.split(' ').map(BigInt))));