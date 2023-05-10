const filePath = './input';
const [nums, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [N, K] = nums.split(' ').map(Number);
function solution(n, l, words) {
    if (l < 5) return 0;
    const ABC = 'abcdefghijklmnopqrstuvwxyz';
    const getMask = str => str.split('').reduce((acc, cur) => acc | (1 << ABC.indexOf(cur)), 0);
    const LEARNED = getMask('antic');
    const masks = words.map(word => getMask(word.substring(4, word.length - 4)));
    const count = (mask) => masks.filter(bit => (bit & mask) === bit).length;
    function bfs(i, k, mask, result) {
        if (k === 0) return count(mask);
        for (let j = i; j < ABC.length; j++) {
            if (!(mask & (1 << j))) {
                result = Math.max(result, bfs(j, k - 1, mask | (1 << j), result));
            }
        }
        return result;
    }
    return bfs(0, l - 5, LEARNED, 0);
}
console.log(solution(N, K, arr));