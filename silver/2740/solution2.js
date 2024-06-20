const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count = 0;
let n = 0;
let m = 0;
let k = 0;
const a = [];
const b = [];
rl.on('line', line => {
    
    if (count === 0) {
        const firstNums = line.split(' ');
        n = +firstNums[0];
        m = +firstNums[1];
    } else if (count > 0 && count <= m + 1) {
        a.push(line);
    } else if (count === m + 2) {
        const firstNums = line.split(' ');
        k = +firstNums[1];
    } else if (count <= m + k + 1) {
        b.push(line);
    }
    count++;
})
rl.on("close", () => {
    console.log(solution([n, m, k], a, b))
    process.exit()
});

function solution ([n, m, k], matrixA, matrixB) {
    const matrix = Array.from({ length: n }, () => new Array(k).fill(BigInt(0)));
    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < m; j ++) {
            for (let l = 0; l < k; l ++) {
                matrix[i][l] += BigInt(matrixA[i].split(' ')[j]) * BigInt(matrixB[j].split(' ')[l]);
            }
        }
    }
    return matrix.map(r => r.join(' ')).join('\n');
    
}
