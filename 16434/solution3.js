const filePath = require('path').join(__dirname, 'input');
let  input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, atk] = input.shift().split(' ').map(BigInt);
const arr = input.map(r => r.split(' ').map(BigInt));
let left = 1n;
let right = 1000000000000000000n;
let min = 0n;
while (left <= right) {
    const mid = (left + right) / 2n;
    let curHp = mid;
    let curAtk = atk;
    for (const [t, a, h] of arr) {
        if (t === 1n) {
            curHp -= (h / curAtk - (h % curAtk === 0n ? 1n : 0n)) * a;
            if (curHp < 1n) break;
        } else {
            curAtk += a;
            curHp += h
            if (curHp > mid) curHp = mid;
        }
    }
    if (curHp > 0n) {
        right = mid - 1n;
        min = mid;
    } else {
        left = mid + 1n;
    }
}
console.log(min.toString());
