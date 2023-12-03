const filePath = require('path').join(__dirname, 'input');
const [N, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (test, arr) {
    let i = 0;
    const answer = [];
    while (test--) {
        const [n, m] = arr[i++]
        const queue = arr[i++].map((v, i) => [v, i]);
        let order = 0;
        let max = Math.max(...queue.map(v => v[0]));
        while (queue.length) {
            const [priority, index] = queue.shift();
            if (priority === max) {
                order++;
                max = Math.max(...queue.map(v => v[0]));
                if (m === index) {
                    answer.push(order);
                    break;
                }
                continue;
            }
            queue.push([priority, index]);
        }
    }
    return answer.join('\n');
}
console.log(solution(+N, arr.map(v => v.split(' ').map(Number))));

