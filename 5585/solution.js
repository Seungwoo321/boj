const filePath = require('path').join(__dirname, 'input')
const n = require('fs').readFileSync(filePath);
function solution (n) {
    // const arr = [500, 100, 50, 10, 5, 1];
    // let total = 1000 - n;
    // let result = 0;
    // for (let m of arr) {
    //     if (total < m) continue;
    //     result += parseInt(total / m);
    //     total %= m;
    // }
    // return result;
    return [500, 100, 50, 10, 5, 1].reduce(([total, result], m) => {
        if (total < m) return [total, result];
        return [total % m, result + parseInt(total / m)];
    }, [1000 - n, 0])[1];
}
console.log(solution(+n));