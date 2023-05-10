const filePath = require('path').join(__dirname, 'input');
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, m, k] = num.split(' ');
function solution (n, m, k, arr, kArr) {
    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const rotate = (y1, x1, y2, x2, tmp) => {
        if (y1 === y2 && x1 === x2) {
            return;
        }
        let i = 0
        let j = 0;
        const queue = [[y1, x1, tmp[y1][x1]]];
        while (j < queue.length) {
            const [y, x, v] = queue[j++]
            const [dy, dx] = direction[i];
            const [ny, nx] = [y + dy, x + dx];
            if (ny < y1 || ny > y2 || nx < x1 || nx > x2) {
                i++;
                queue.push([y, x, v]);
                continue;
            }
            queue.push([ny, nx, tmp[ny][nx]]);
            tmp[ny][nx] = v;
            if (ny === y1 && nx === x1) break;
        }
        rotate(y1 + 1, x1 + 1, y2 - 1, x2 - 1, tmp);
    }
    const permutations = (r, depth) => {
        if (depth === r) {
            const newArr = Array.from({ length: n }, (v, i) => arr[i].slice());
            for (let i = 0; i < r; i ++) {
                const [r, c, s] = kArr[i]
                rotate(r - s - 1, c - s - 1, r + s - 1, c + s - 1, newArr);
            }
            return Math.min.apply(null, newArr.map(r => r.reduce((acc, cur) => acc + cur, 0)));
        }
        let arrValue = Infinity;
        for (let i = depth; i < r; i ++) {
            [kArr[i], kArr[depth]] = [kArr[depth], kArr[i]];
            arrValue = Math.min(arrValue, permutations(r, depth + 1));
            [kArr[i], kArr[depth]] = [kArr[depth], kArr[i]];
        }
        return arrValue;
    }
    return permutations(k, 0);
}
console.log(
    solution(
        +n,
        +m,
        +k,
        arr.slice(0, n).map(r => r.split(' ').map(Number)),
        arr.slice(n).map(r => r.split(' ').map(Number))
    )
)
