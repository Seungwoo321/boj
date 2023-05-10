const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    const distance = [[0, 1], [-1, 0], [0, -1], [1, 0]];
    const grid = Array.from({ length: 101 }, () => new Array(101).fill(0));
    const makeDragonCurve = (d) => {
        let curve = [[d], [(d + 1) % 4]];
        let next = curve[curve.length - 1];
        for (let i = 2; i <= 10; i++) {
            const tmp = [];
            for (let j = next.length - 1; j > -1; j--) {
                tmp.push((next[j] + 1) % 4);
            }
            next = tmp.concat(next);
            curve.push(next);
        }
        return curve;
    }
    const dragonCurve = [
        makeDragonCurve(0),
        makeDragonCurve(1),
        makeDragonCurve(2),
        makeDragonCurve(3)
    ]
    const drawDragonCurve = ([x, y, d, g]) => {
        grid[y][x] = 1;
        let ny = y;
        let nx = x;
        for (let i = 0; i <= g; i ++) {
            const curves = dragonCurve[d][i];
            for (let j = 0; j < curves.length; j ++) {
                const curve = curves[j]
                ny = distance[curve][0] + ny;
                nx = distance[curve][1] + nx;
                grid[ny][nx] = 1;
            }
        }
    }
    for (let i = 0; i < n; i ++) {
        drawDragonCurve(arr[i]);
    }
    let answer = 0;
    for (let i = 0; i < 100; i ++) {
        for (let j = 0; j < 100; j ++) {
            answer += grid[i][j] && grid[i + 1][j] && grid[i][j + 1] && grid[i + 1][j + 1];
        }
    }
    return answer;
}
console.log(solution(+n, arr.map(r => r.split(' ').map(Number))));