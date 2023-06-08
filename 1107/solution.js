const filePath = require('path').join(__dirname, 'input');
const [n, m, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, m, arr) {
    const max = Math.min(1000000, n * 2)
    const broken = new Array(10).fill(0)
    for (let i = 0; i < m; i ++) {
        broken[arr[i]] = 1;
    }
    const moveDirect = (channel) => {
        let move = 0;
        while (channel > 0) {
            const x = channel % 10;
            move++;
            if (broken[arr[x]]) return move;
            channel = Math.floor(channel / 10)
        }
        return move;
    }
    let start = 100;
    let answer = Math.abs(n - 100);
    for (let i = 0; i < max; i ++) {
        let move = moveDirect(i);
        
    }
    
}
console.log(solution(+n, +m, arr.split(' ').map(Number)));