const filePath = require('path').join(__dirname, 'input');
const [N, ...arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');
function solution(n, arr) {
    const distance = [[0, 1], [1, 0]];
    const getEatMax = (r, c) => {
        let max = 0;
        let row = 1;
        let col = 1;
        for (let i = 1; i < n; i++) {
            if (arr[r][i - 1] === arr[r][i]) max = Math.max(max, ++row);
            else row = 1;
            if (arr[i - 1][c] === arr[i][c]) max = Math.max(max, ++col);
            else col = 1;
        }
        return max;
    }
    let answer = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let [dy, dx] of distance) {
                const [ny, nx] = [dy + i, dx + j];
                if (ny >= n || nx >= n) continue;
                if (arr[i][j] === arr[ny][nx]) continue;
                [arr[i][j], arr[ny][nx]] = [arr[ny][nx], arr[i][j]];
                answer = Math.max(getEatMax(i, j), getEatMax(j, i), getEatMax(ny, nx), answer);
                [arr[i][j], arr[ny][nx]] = [arr[ny][nx], arr[i][j]];
            }
        }
    }
    return answer;
}
console.log(solution(+N, arr.map(r => r.split(''))));