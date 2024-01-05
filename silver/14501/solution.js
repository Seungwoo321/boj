const filePath = require('path').join(__dirname, 'input');
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function soluton (n, arr) {
    const recursive = (index, totalPoint) => {
        if (!arr[index]) return totalPoint
        const nextIndex = arr[index][0] + index
        if (arr[nextIndex]) {
            return recursive(nextIndex, totalPoint + arr[index][1]);
        } else {
            // return recursive(nextIndex, totalPoint)
            return totalPoint
        }
    }
    let maxPoint = 0;
    console.log(recursive(1, 0))
    for (let i = 0; i < n; i++) {
        // maxPoint = Math.max(maxPoint, recursive(i, 0));
        // console.log(recursive(i, 0))
    }
    return maxPoint;
}

console.log(soluton(+num, arr.map(r => r.split(' ').map(Number))));