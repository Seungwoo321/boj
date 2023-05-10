const filePath = require('path').join(__dirname, 'input');
const [...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(' ')
    .map(Number);
function solution (arr) {
    const grid = {
        0: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 0],
        10: [10, 13, 16, 19, 25, 30, 35, 40, 0],
        20: [20, 22, 24, 25, 30, 35, 40, 0],
        30: [30, 28, 27, 26, 25, 30, 35, 40, 0],
        25: [25, 30, 35, 40, 0]
    };
    const isBlue = (y, x) => (y === 0 && ((x === 5) || (x === 10) || (x === 15)));
    const is25Line = (y, x) => ((y === 0 && x === 20) || (y == 10 && 4 <= x && x <= 7) || (y === 20 && 3 <= x && x <= 6) || (y === 30 && 4 <= x && x <= 7))
    const nextPosition = (y, moveX) => {
        if (isBlue(y, moveX)) {
            return [grid[0][moveX], 0]
        } else if (is25Line(y, moveX)) {
            return [25, grid[25].indexOf(grid[y][moveX])];
        }
        return  [y, moveX];
    }
    const existPiece = (y, x, positions) => positions.filter(([py, px]) => (px > 0 || py > 0) && py === y && px === x).length > 0;
    const bfs = (queue) => {
        const positions = [[0, 0], [0, 0], [0, 0], [0, 0]]; // 각 말이 위치한 배열의 키와 인덱스
        const currentScore = [0, 0, 0, 0]; // 각 말이 위치한 좌표의 점수
        const finalScore = [0, 0, 0, 0]; // 각 말의 누적 점수
        let i = 0;
        while (i < queue.length) {
            const num = arr[i]; // 주사위 숫자
            const piece = queue[i]; // 움직일 말의 번호
            let [y, x] = positions[piece]; // 현재 말의 위치
            const [ny, nx] = nextPosition(y, x + num); // 이동한 말의 위치 
            if (existPiece(ny, nx, positions)) break; // 이미 말이 있으면 중지
            positions[piece] = [ny, nx];
            currentScore[piece] = grid[ny][nx] ?? 0
            finalScore[piece] += currentScore[piece];
            i++
            console.log(currentScore, piece + 1 + '번말 ', num + '회 이동', positions)
        }
        const sum = finalScore.reduce((acc, cur) => acc + (cur || 0), 0);
        if (sum === 245) console.log(queue)
        return sum;
    }
    const permutation = (depth, tmp) => {
        if (depth === arr.length) {
            return bfs(tmp);
        }
        let result = 0;
        for (let i = 0; i < 4; i ++) {
            tmp.push(i);
            result = Math.max(result, permutation(depth + 1, tmp));
            tmp.pop();
        }
        return result;
    }
    // return permutation(0, []);
    return bfs(
        [
            3, 2, 2, 2, 2,
            2, 3, 2, 3, 2
        ]
    )
}
console.log(solution(arr));