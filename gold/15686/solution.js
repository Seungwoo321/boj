const filePath = require('path').join(__dirname, 'input');
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, m] = num.split(' ')
function solution (n, m, arr) {
    const houses = [];
    const chickenHouse = [];
    for (let i = 0; i < n; i ++) {
        const row = arr[i].split(' ');
        for (let j = 0; j < n; j++) {
            if (row[j] === '1') houses.push([i, j]);
            if (row[j] === '2') chickenHouse.push([i, j]);
        }
    }
    const combination = (n, r) => {
        const results = [];
        const recursive = (start, tmp) => {
            if (tmp.length === r) {
                results.push(tmp.slice());
                return;
            }
            for (let i = start; i < n; i++) {
                tmp.push(i);
                recursive(i + 1, tmp);
                tmp.pop();
            }
        }
        recursive(0, []);
        return results
    }
    const chickenHouseArray = combination(chickenHouse.length, m);
    let answer = Infinity;
    for (let i = 0; i < chickenHouseArray.length; i++) {
        const chickens = chickenHouseArray[i];
        let totalDistance = 0;
        for (let j = 0; j < houses.length; j++) {
            const [y1, x1] = houses[j];
            let chickenDistance = Infinity;
            for (let k = 0; k < chickens.length; k ++) {
                // const [y2, x2] = chickens[k];
                const [y2, x2] = chickenHouse[chickens[k]];
                chickenDistance = Math.min(chickenDistance, Math.abs(y1 - y2) + Math.abs(x1 - x2));
            }
            totalDistance += chickenDistance
        }
        answer = Math.min(answer, totalDistance);
    }
    return answer;
}
console.log(solution(+n, +m, arr));