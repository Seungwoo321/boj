const filePath = './input';
const n = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim();
function soludtion(n) {
    if (n === 1 || n === 2) return n;
    const max = n + 1;
    const queue = Array.from({ length: n + 1 }, (v, i) => i);
    let front = 0;
    let rear = max
    while ((front + 1) % max !== rear) {
        front = (front + 1) % max;
        if ((front + 1) % max === rear) break;
        queue[rear] = queue[++front];
        rear = (++rear) % max;
    }
    return queue[front];
}
console.log(soludtion(Number(n)));