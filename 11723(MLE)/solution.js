const filePath = './input';
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution (n, arr) {
    let mask = 0;
    arr.forEach(row => {
        const [cmd, x] = row.split(' ');
        if (cmd === 'add') mask |= (1 << x);
        else if (cmd === 'remove') mask &= ~(1 << x);
        else if (cmd === 'check') console.log(mask & (1 << x) ? 1 : 0);
        else if (cmd === 'toggle') mask ^= (1 << x);
        else if (cmd === 'all') mask = (1 << 21) - 1;
        else mask = 0;
    });
}
solution(Number(num), arr);

/**
 * 
 * 
 * add x: S에 x를 추가한다. (1 ≤ x ≤ 20) S에 x가 이미 있는 경우에는 연산을 무시한다.
 * 
 * remove x: S에서 x를 제거한다. (1 ≤ x ≤ 20) S에 x가 없는 경우에는 연산을 무시한다.
 * 
 * check x: S에 x가 있으면 1을, 없으면 0을 출력한다. (1 ≤ x ≤ 20)
 * 
 * toggle x: S에 x가 있으면 x를 제거하고, 없으면 x를 추가한다. (1 ≤ x ≤ 20)
 * 
 * all: S를 {1, 2, ..., 20} 으로 바꾼다.
 * 
 * empty: S를 공집합으로 바꾼다. 
 */