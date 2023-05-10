const filePath = './input';
const [N, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function cupRamen(n, tasks) {
    tasks.sort((a, b) => b[1] - a[1]);
    const days = new Set();
    let sum = 0;
    for (const [dl, point] of tasks) {
        for (let j = dl; j > 0; j--) {
            if (!days.has(j)) {
                days.add(j);
                sum += point;
                break;
            }
        }
    }
    return sum;
}
console.log(cupRamen(Number(N), arr.map(v => v.split(' ').map(Number))));

// greedy 시간초과 