const filePath = require('path').join(__dirname, 'input');
const [nums, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, atk] = nums.split(' ');
function solution(n, atk, arr) {
    let maxHp = 0n;
    let curHp = 0n;
    for (let i = 0; i < n; i++) {
        let [t, a, h] = arr[i];
        if (t === 1n) {
            const damage = BigInt((h / atk + (h % atk === 0n ? 0n : 1n) - 1n) * a);
            if (curHp < damage) {
                maxHp += damage - curHp;
                curHp = 0n;
            } else {
                curHp -= damage;
            }
        } else {
            atk += a;
            curHp = curHp + h;
            if (curHp > maxHp) curHp = maxHp;
        }
    }
    return (maxHp + 1n).toString();
}
console.log(solution(+n, BigInt(atk), arr.map(r => r.split(' ').map(BigInt))));