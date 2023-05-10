const filePath = require('path').join(__dirname, 'input');
const [num, count, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (bucket, arr) {
    return arr.reduce(([start, move], cur) => {
        if (cur < (start + 1)) {
            const diff = (start + 1) - cur;
            return [start - diff, move + diff];
        } else if ((start + bucket) < cur) {
            const diff = cur - (start + bucket);
            return [start + diff, move + diff];
        } else {
            return [start, move];
        }
    }, [0, 0])[1];
    // let start = 0;
    // let move = 0;
    // while (arr.length) {
    //     const target = arr.shift();
    //     if (target < (start + 1)) {
    //         const diff = (start + 1) - target
    //         move += diff;
    //         start -= diff;
    //     } else if ((start + bucket) < target) {
    //         const diff = target - (start + bucket);
    //         move += diff;
    //         start += diff;
    //     }
    // }
    // return move;
}
console.log(solution(+num.split(' ')[1], arr.map(Number)));