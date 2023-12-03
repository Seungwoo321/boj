const filePath = './input';
const n = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim();
function soludtion (n) {
    if (n === 1 || n === 2) return n;
    const max = n + 1;
    const queue = Array.from({ length: n + 1 }, (v, i) => i);
    let front = 0;
    let rear = max
    const poll = (front, max) => (front + 1) % max;
    const offer = (rear, max) => (rear + 1) % max;
    const isEmpty = (front, rear) => front === rear
    while (!isEmpty(front + 1, rear)) {
        front = poll(front, max)
        if (isEmpty(front + 1, rear)) break
        front = poll(front, max)
        queue[rear] = queue[front]
        rear = offer(rear, max)
    }
    return queue[front];
}
console.log(soludtion(Number(n)));