// 0 빈칸
// 1 벽
// 2 바이러스
/**
 * 
 * @param {Array[]} grid
 */
function solution (grid) {
    const n = grid.length;
    const m = grid[0].length
    let answer = 0;
    let visited = new Array(n).fill(0).map(v => new Array(m).fill(0));

    const virusList = [];
    const wallList = [];

    // const dy = [-1, 0, 1, 0];
    // const dx = [0, 1, 0, -1];
    /** c++ 코드 그대로 변환 */
    // const dfs = function (y, x) {
    //     for (i = 0; i < 4; i++) {
    //         let ny = y + dy[i];
    //         let nx = x + dx[i];
    //         if (ny < 0 || ny >= n || nx < 0 || nx >= m || visited[ny][nx] === 2 || grid[ny][nx] === 1) continue;
    //         visited[ny][nx] = 2
    //         dfs(ny, nx);
    //     }
    // }
    /** c++ 코드 리팩토링 */
    // const dfs = function (y, x) {
    //     if (y < 0 || y >= n || x < 0 || x >= m || grid[y][x] === 1 || visited[y][x] === 2) return
    //     visited[y][x] = 2
    //     for (i = 0; i < 4; i++) {
    //         let ny = y + dy[i];
    //         let nx = x + dx[i];
    //         dfs(ny, nx);
    //     }
    // }    
    /** javascript 코드 */
    const dfs = function (y, x) {
        if (y < 0 || y >= n || x < 0 || x >= m || grid[y][x] === 1 || visited[y][x] === 2) return
        visited[y][x] = 2
        dfs(y + 1, x)
        dfs(y - 1, x)
        dfs(y, x + 1)
        dfs(y, x - 1)
    }
    const combination = function () {
        visited = visited.map((row, i) => row.map((v, j) => 0));
        for (let [y, x] of virusList) {
            // visited[y][x] = 2
            dfs(y, x);
        }
        // console.log('visited', visited)
        let count = 0;
        for (let i = 0; i < n; i ++) {
            for (let j = 0; j < m; j ++) {
                if (grid[i][j] === 0 && !visited[i][j]) count ++;
            }
        }
        return count;
    }

    // main
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 2) virusList.push([i, j]);
            if (grid[i][j] === 0) wallList.push([i, j]);
        }
    }
    // console.log(grid)
    for (let i = 0; i < wallList.length; i ++) {
        for (let j = 0; j < i; j ++) {
            for (let k = 0; k < j; k ++) {
                const [y1, x1] = wallList[i];
                const [y2, x2] = wallList[j];
                const [y3, x3] = wallList[k];
                grid[y1][x1] = 1;
                grid[y2][x2] = 1;
                grid[y3][x3] = 1;
                answer = Math.max(answer, combination())
                grid[y1][x1] = 0;
                grid[y2][x2] = 0;
                grid[y3][x3] = 0;

            }
        }
    }
    console.log(answer) 
}

solution([
    [2, 0, 0, 0, 1, 1, 0],
    [0, 0, 1, 0, 1, 2, 0],
    [0, 1, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0]
])

solution([
    [0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 2],
    [1, 1, 1, 0, 0, 2],
    [0, 0, 0, 0, 0, 2]
])