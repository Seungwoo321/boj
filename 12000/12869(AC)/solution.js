// const filePath = '/dev/stdin';
const filePath = './input';
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");
const nums = input[1].split(' ').map(v => Number(v));

console.log(solution(nums));

function solution (nums) {
    const attacks = [
        [9, 3, 1],
        [3, 9, 1],
        [9, 1, 3],
        [1, 9, 3],
        [3, 1, 9],
        [1, 3, 9]
    ];
    const maxHp = Math.max.apply(null, nums)
    const visited = Array.from({ length: maxHp + 1 }).map(_ => new Array(maxHp + 1).fill(0).map(__ => new Array(maxHp + 1).fill(0)));
    const a = nums[0];
    const b = nums[1] || 0;
    const c = nums[2] || 0;
    let queue = [[a, b, c]];
    visited[a][b][c] = 1;
    while (queue.length) {
        const [a1, b1, c1] = queue.shift();
        for (let i = 0; i < attacks.length; i ++ ) {
            const [one, two, three] = attacks[i];
            const na = Math.max(0, a1 - one);
            const nb = Math.max(0, b1 - two);
            const nc = Math.max(0, c1 - three);
            if (visited[0][0][0]) break;
            if (visited[na][nb][nc]) continue;
            visited[na][nb][nc] = visited[a1][b1][c1] + 1;
            queue.push([na, nb, nc]);
        }
    }
    return visited[0][0][0] - 1;
}