// const filePath = '/dev/stdin';
const filePath = './input';
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(' ')
console.log(solution(Number(input[0]), Number(input[1])));
/**
 * 수빈이가 동생을 찾는 가장 빠른 시간
 * @param {number} n - 수빈이 위치
 * @param {number} m - 동생 위치 
 */
function solution(n, m) {
    if (n === m) return 0;
    const MAX = 500001;
    const visited = Array.from({length: 2}, v => new Array(MAX).fill(0))
    let step = 0;
    let queue = [n];
    visited[0][n] = 1;
    while (m < MAX) {
        if (visited[step % 2][m]) return step;
        step++;
        m += step;
        const tmpQ = [];
        while (queue.length) {
            const now = queue.shift();
            for (let next of [now - 1, now + 1, now * 2]) {
                if (0 <= next && next < MAX && !visited[step % 2][next]) {
                    visited[step % 2][next] = 1;
                    if (next === m) return step;
                    tmpQ.push(next);
                }
            }
        }
        queue = tmpQ;
    }
    return -1;
}