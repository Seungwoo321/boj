const filePath = './input';
const [nums, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [N, K] = nums.split(' ').map(Number);
function solution(n, l, words) {
    if (l < 5) return 0;
    const ABC = 'bdefghjklmopqrsuvwxyz';
    const masks = [];
    for (let i = 0; i < words.length; i++) {
        let mask = 0;
        for (let j = 4; j < words[i].length - 4; j++) {
            if (ABC.indexOf(words[i][j]) > -1) mask |= (1 << ABC.indexOf(words[i][j]));
        }
        if (mask) masks.push(mask);
    }
    const count = (mask) => masks.filter(bit => bit && (bit & mask) === bit).length;
    function bfs(i, k, mask, result) {
        if (k === 0) return count(mask);
        for (let j = i; j < ABC.length; j++) {
            if (!(mask & (1 << j))) {
                result = Math.max(result, bfs(j, k - 1, mask | (1 << j), result));
            }
        }
        return result;
    }
    return bfs(0, l - 5, 0, 0) + words.length - masks.length;
}
console.log(solution(N, K, arr));