// const filePath = '/dev/stdin';
const filePath = './input';
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .split(" ")
    .map(Number);
console.log(solution(input[0], input[1]).join('\n'));
/**
 * 수빈이가 동생을 찾는 가장 최단 거리와 경우의 수 출력
 * @param {number} n - 수빈이 위치
 * @param {number} m - 동생 위치 
 */
function solution (n, m) {
    if (n === m) return [0, 1];
    if (n > m) return [n - m, 1];
    const MAX = 100001;
    const visited = new Array(MAX).fill(0);
    const count = new Array(MAX).fill(0);
    const queue = [n];
    visited[n] = 1;
    count[n] = 1;
    while (queue.length) {
        const now = queue.shift();
        for (const next of [now - 1, now + 1, now * 2]) {
            if (next < 0 || next > MAX) continue;
            if (visited[next] === visited[now] + 1) count[next] += count[now];
            if (visited[next]) continue;
            visited[next] = visited[now] + 1;
            count[next] += count[now];
            queue.push(next);
            // if (0 <= next && next <= MAX) {
            //     if (visited[next] === 0) {
            //         visited[next] = visited[now] + 1;
            //         count[next] += count[now];
            //         queue.push(next);
            //     } else if (visited[next] === visited[now] + 1) {
            //         count[next] += count[now];
            //     }
            // }
        }
    }
    return [visited[m] - 1, count[m]];
}
