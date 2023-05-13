const filePath = require('path').join(__dirname, 'input');
const [nums, cards] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution(m, cards) {
    let sum = 0;
    for (let i = 0; i < cards.length; i++) {
        for (let j = i + 1; j < cards.length; j++) {
            for (let k = j + 1; k < cards.length; k++) {
                if (cards[i] + cards[j] + cards[k] <= m) {
                    sum = Math.max(cards[i] + cards[j] + cards[k], sum)
                }
            }
        }
    }
    return sum;
}
console.log(solution(nums.split(' ')[1], cards.split(' ').map(Number)));
