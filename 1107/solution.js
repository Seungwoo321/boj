const filePath = require('path').join(__dirname, 'input');
const [n, m, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution(n, m, arr) {
    const start = 100;
    if (start === n) {
        return 0;
    }
    const max = 1000000;
    const broken = new Array(10).fill(0);
    for (let i = 0; i < m; i++) {
        broken[arr[i]] = 1;
    }
    const moveDirect = (channel) => {
        if (channel === 0) {
            if (broken[channel]) return -1
            return 1
        }
        let move = 0;
        while (channel > 0) {
            const x = channel % 10;
            move++;
            if (broken[x]) {
                return -1;
            }
            channel = Math.floor(channel / 10);
        }
        return move;
    }
    let answer = Math.abs(n - start);
    for (let i = 0; i < max; i++) {
        let move = moveDirect(i);
        if (move > 0) {
            answer = Math.min(answer, move + Math.abs(n - i));
        }
    }
    return answer;
}
// console.log(solution(+n, +m, arr.split(' ').map(Number)));

module.exports = {
    solution
}