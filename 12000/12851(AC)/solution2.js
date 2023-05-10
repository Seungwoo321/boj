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
    if (n > m) return [n - m, 1]
    const MAX = 100001;
    const visited = new Array(MAX).fill(false);
    const answer = [0, 0]
    const queue = [[n, 0]];
    let i = 0;
    while (queue.length > i) {
        const [now, count] = queue[i++];
        visited[now] = true;
        if (answer[0] && count > answer[0]) break;
        if (now === m) {
            answer[0] = count;
            answer[1]++;
        }
        for (const next of [now - 1, now + 1, now * 2]) {
            if (0 <= next && next <= 100000 && !visited[next]) {
                queue.push([next, count + 1]);
            }
        }
    }
    return answer;
}
