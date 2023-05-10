const filePath = require('path').join(__dirname, 'input');
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [r, c, m] = num.split(' ');
function solution (row, col, m, arr) {
    arr.sort((a, b) => b[4] - a[4]);
    const grid = Array.from({ length: row }, () => new Array(col).fill('.'));
    const catched = new Array(col).fill(0);
    const catchShark = () => {
        for (let i = 0; i < m; i++) {
            if (catched[i]) continue;
            const [r, c, s, d, z] = arr[i];
            const prev = grid[r][c];
            if (prev !== '.' && arr[prev][4] > z) {
                catched[i] = 1;
            } else {
                grid[r][c] = i;
            }
        }
    }
    const fishShark = (pos) => {
        let sum = 0;
        for (let i = 0; i < r; i ++) {
            const shark = grid[i][pos];
            if (shark !== '.') {
                sum += arr[shark][4];
                grid[i][pos] = '.';
                catched[shark] = 1;
                break;
            }
        }
        return sum;
    }
    const distance = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    const moveShark = () => {
        for (let i = 0; i < m; i ++) {
            if (catched[i]) continue;
            let [y, x, s, d, z] = arr[i];
            grid[y][x] = '.';
            // s %= d < 2 ? 2 * (row - 1) : 2 * (col - 1);
            let ny = y;
            let nx = x;
            while (true) {
                ny = y + s * distance[d][0];
                nx = x + s * distance[d][1];
                if (0 <= ny && row > ny && 0 <= nx && col > nx) break;
                if (d < 2) {
                    s -= ny < 0 ? y : row - 1 - y;
                    y = ny < 0 ? 0 : row - 1;
                } else {
                    s -= nx < 0 ? x : col - 1 - x;
                    x = nx < 0 ? 0 : col - 1;
                }
                d ^= 1;
            }
            arr[i][0] = ny;
            arr[i][1] = nx;
            arr[i][3] = d;
        }
    }
    let answer = 0;
    for (let i = 0; i < col; i ++) {
        catchShark();
        answer += fishShark(i);
        moveShark();
    }
    return answer
}
console.log(solution(+r, +c, +m, arr.map(r => r.split(' ').map((v, i) => i === 0 || i == 1 || i === 3 ? v - 1 : +v))));