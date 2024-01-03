const filePath = require('path').join(__dirname, 'input');
const [num, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
    function soluton (n, arr) {
    const recursive = (depth) => {
        if (n <= depth) {
            console.log(arr[depth]?.[1])
            return
        }
        return recursive(depth + arr[depth]?.[0])
        // for (let i = depth; i < n; i ++) {
            // maxCost = Math.max(maxCost, recursive(i + arr[i][0], arr[i + arr[i][0]] ? sum + arr[i][1] : sum));
            // maxCost = Math.max(, recursive(i + arr[i][0], sum))
    }
    return recursive(0, 0);

}

console.log(soluton(+num, arr.map(r => r.split(' ').map(Number))));