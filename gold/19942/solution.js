// const filePath = '/dev/stdin';
const filePath = require('path').join(__dirname, 'input')
const [num, ...mapping] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution(n, minimums, mapping) {
    const [mp, mf, ms, mv] = minimums;
    let minCost = Infinity;
    let minMethods = '';
    for (let i = 1; i < (1 << n); i++) {
        let [np, nf, ns, nv, cost, methods] = [0, 0, 0, 0, 0, ''];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                const row = mapping[j];
                np += row[0];
                nf += row[1];
                ns += row[2];
                nv += row[3];
                cost += row[4];
                methods += j + 1 + ' ';
            }
        }
        if (np >= mp && nf >= mf && ns >= ms && nv >= mv) {
            if (minCost > cost || (minCost === cost && minMethods > methods)) {
                minCost = cost;
                minMethods = methods;
            }
        }
    }
    return minCost === Infinity ? -1 : minCost + '\n' + minMethods;
}
console.log(solution(+num, mapping.shift().split(' ').map(Number), mapping.map(r => r.split(' ').map(Number))));