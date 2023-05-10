// const filePath = '/dev/stdin';
const filePath = './input';
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [num, ...mapping] = input;
function solution (n, minimums, mapping) {
    const [mp, mf, ms, mv] = minimums;
    let minCost = Infinity;
    let minMethods = '';
    for (let i = 1; i < (1 << n); i ++) {
        let [np, nf, ns, nv, cost, methods] = [0, 0, 0, 0, 0, ''];
        for (let j = 0; j < n; j ++) {
            if (i & (1 << j)) {
                np += mapping[j][0];
                nf += mapping[j][1];
                ns += mapping[j][2];
                nv += mapping[j][3];
                cost += mapping[j][4];
                methods+= j + 1 + ' ';
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
console.log(solution(Number(num), mapping[0].split(' ').map(Number), mapping.slice(1).map(v => v.split(' ').map(Number))))