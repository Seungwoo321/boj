// const filePath = '/dev/stdin';
const filePath = './input'
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .split('\n');
const [row, col] = input[0].split(' ')

function solution(r, c, grid) {
    const distance = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const visitedSwan = Array.from({ length: r }, () => new Array(c).fill(0));
    const visitedIce = Array.from({ length: r }, () => new Array(c).fill(0));
    let meetSwan = [];
    let waters = [];
    let swans = [];
    let nextWaters = [];
    let nextSwans = [];
    function meltIce (grid, visited) {
        while (waters.length) {
            const [y, x] = waters.shift();
            for (let [dy, dx] of distance) {
                const ny = y + dy;
                const nx = x + dx;
                if (ny < 0 || ny >= r || nx < 0 || nx >= c || visited[ny][nx]) continue;
                if (grid[ny][nx] === '.') {
                    waters.push([ny, nx])
                } else {
                    grid[ny][nx] = '.';
                    nextWaters.push([ny, nx]);
                }
                visited[ny][nx] = 1;
            }
        }
    }
    function moveSwan (grid, visited) {
        while (swans.length) {
            const [y, x] = swans.shift();
            if (meetSwan[0] === y && meetSwan[1] === x) return true;
            for (let [dy, dx] of distance) {
                const ny = y + dy;
                const nx = x + dx;
                if (ny < 0 || ny >= r || nx < 0 || nx >= c || visited[ny][nx]) continue;
                if (grid[ny][nx] === '.') {
                    swans.push([ny, nx]);
                } else {
                    nextSwans.push([ny, nx]);
                }
                visited[ny][nx] = 1;
            }
        }
        return false;
    }
    for (let i = 0; i < r; i++) {
        grid[i] = grid[i].split('');
        for (let j = 0; j < c; j++) {
            if (grid[i][j] === 'L') {
                if (swans.length) {
                    meetSwan.push(i);
                    meetSwan.push(j);
                } else {
                    visitedSwan[i][j] = 1;
                    swans.push([i, j])
                }
                grid[i][j] = '.'
            }
            if (grid[i][j] === '.') {
                visitedIce[i][j] = 1;
                waters.push([i, j]);

            }
        }
    }
    let day = 0;
    while (true) {
        meltIce(grid, visitedIce);
        day++;
        console.log(visitedSwan.map(v => v.join('')).join('\n'))
        console.log()
        if (moveSwan(grid, visitedSwan)) break;
        swans = nextSwans;
        waters = nextWaters;
        nextSwans = [];
        nextWaters = [];
    }
    return day;
}

console.log(solution(parseInt(row), parseInt(col), input.slice(1)));