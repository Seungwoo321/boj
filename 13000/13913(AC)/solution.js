// const filePath = '/dev/stdin';
const filePath = './input';
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const inputArr = input[0].split(' ');
console.log(solution(Number(inputArr[0]), Number(inputArr[1])).join('\n'));
/**
 * 수빈이가 동생을 찾는 가장 최단 거리와 경로 출력
 * @param {number} n - 수빈이 위치
 * @param {number} m - 동생 위치 
 */
function solution (n, m) {
    if (n === m) return [0, n];
    if (n > m) return [n - m, Array.from({ length: n - m + 1 }, (v, i) => n - i).join(' ')];
    const MAX = 100001;
    const visited = new Array(MAX).fill(0);
    const prev = new Array(MAX).fill(0);
    const queue = [n];
    visited[n] = 1;
    while (queue.length) {
        const now = queue.shift();
        if (visited[m]) break;
        for (let next of [now - 1, now + 1, now * 2]) {
            if (0 <= next && next <= MAX && !visited[next]) {
                prev[next] = now;
                visited[next] = visited[now] + 1;
                queue.push(next);
            }
        }
    }
    const trace = Array.from({ length: visited[m] - 1 }).reduce((acc, cur) => acc.unshift(prev[acc[0]]) && acc, [m]).join(' ');
    return [visited[m] - 1, trace];
}