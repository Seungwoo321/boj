// 3-A 백준 15686 치킨 배달
/**
 * 폐업시키지 않을 치킨 집의 수 m 개를 골랐을 때 도시의 치킨 거리 최소값
 * @param {Array[]} grid n x n 의 도시 지도 
 * @param {Number} m 폐업 시키지 않을 치킨 집의 수
 */
function solution (grid, m) {
    const combination = (start, m, arr, tmp, result) => {        
        for (let i = start + 1; i < arr.length; i ++) {
            tmp.push(i);
            combination(i, m, arr, tmp, result);
            if (tmp.length === m) {
                result.push([...tmp]);
            }
            tmp.pop();
        }
        return result;
    }
    const row = grid.length;
    const col = grid[0].length;
    const chicken = [];
    const home = [];
    for (let i = 0; i < row; i ++) {
        for (let j = 0; j < col; j ++) {
            if (grid[i][j] === 1) home.push([i, j]);
            if (grid[i][j] === 2) chicken.push([i, j]);
        }
    }
    const selected = combination(-1, m, chicken, [], []);
    console.log(selected);
    let minCityDiff = Infinity;

    for (let i = 0; i < selected.length; i ++) {
        let cityDiff = 0;
        const select = selected[i];
        for (let j = 0; j < home.length; j ++) {
            const [y1, x1] = home[j];
            let homeDiff = Infinity;
            for (let k = 0; k < select.length; k ++) {
                const [y2, x2] = chicken[select[k]];
                homeDiff = Math.min(homeDiff, Math.abs(y1 - y2) + Math.abs(x1 - x2));
            }

            cityDiff += homeDiff;
            
        }
        minCityDiff = Math.min(minCityDiff, cityDiff);
    }
    return minCityDiff;
}

console.log(solution([
    [0, 0, 1, 0, 0],
    [0, 0, 2, 0, 1],
    [0, 1, 2, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 2]
], 3)) // 5

console.log(solution([
    [0, 2, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [2, 0, 0, 1, 1],
    [2, 2, 0, 1, 2]
], 2)) // 10

console.log(solution([
    [1, 2, 0, 0, 0],
    [1, 2, 0, 0, 0],
    [1, 2, 0, 0, 0],
    [1, 2, 0, 0, 0],
    [1, 2, 0, 0, 0]
], 1)) // 11

console.log(solution([
    [1, 2, 0, 2, 1],
    [1, 2, 0, 2, 1],
    [1, 2, 0, 2, 1],
    [1, 2, 0, 2, 1],
    [1, 2, 0, 2, 1]
], 1)) // 32