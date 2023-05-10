// const filePath = '/dev/stdin' 
const filePath = './input'
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((row) => row.split(" ").map((num) => +num));
const [_, l, r] = input[0];
const arr = input.slice(1);
solution(l, r, arr);

// 3-C 백준 16234 인구이동
/**
 * 인구수가 l개 이상 r개 이하면 인구이동이 일어난다 총 몇번 일어나는지 구하기
 * @param {Number} l 
 * @param {Number} r 
 * @param {Array[]} arr 
 */
function solution(l, r, arr) {
    let n = arr.length;
    let m = arr[0].length;
    const distance = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const dfs = ([y, x], sum, size, visited, move) => {
        for (let i = 0; i < distance.length; i++) {
            const [dy, dx] = distance[i];
            const ny = dy + y;
            const nx = dx + x;
            if (ny < 0 || ny >= n || nx < 0 || nx >= m || visited[ny][nx]) continue;
            const diff = Math.abs(arr[ny][nx] - arr[y][x]);
            if (diff >= l && diff <= r) {
                visited[ny][nx] = 1;
                [sum, size] = dfs([ny, nx], sum, size, visited, move);
                sum += arr[ny][nx];
                size += 1;
                move.push([ny, nx])

            }
        }
        return [sum, size];
    }

    let moveCount = 0;
    while (true) {
        let flag = false;
        const visited = Array.from({ length: n }).map(v => new Array(m).fill(0));
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (visited[i][j]) continue;
                const move = []
                let [sum, size] = dfs([i, j], 0, 0, visited, move);
                if (size === 1) continue;
                for (let [r, c] of move) {
                    arr[r][c] = Math.floor(sum / size);
                    flag = true;
                }
            }
        }
        if (!flag) break;
        console.log(arr)
        moveCount++;
    }
    console.log(moveCount);
}