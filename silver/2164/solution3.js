const filePath = './input';
const n = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim();
function CircularQueue (size) {
    this.front = 0;
    this.rear = 0;
    this.data = new Array(size + 1).fill(0);
    this.maxSize = size + 1;
    this.offer = function (val) {
        this.rear = (++this.rear) % this.maxSize;
        this.data[this.rear] = val;
    }
    this.poll = function () {
        this.front = (++this.front) % this.maxSize;
        return this.data[this.front];
    }
    this.isEmpty = function () {
        return this.front === this.rear;
    }
    this.isOneSize = function () {
        return this.front + 1 === this.rear;
    }
}
function soludtion(n) {
    const queue = new CircularQueue(n)
    for (let i = 1; i <= n; i++) {
        queue.offer(i);
    }
    while (!queue.isOneSize()) {
        queue.poll();
        if (queue.isOneSize()) break
        queue.offer(queue.poll());
    }
    return queue.poll();
}
console.log(soludtion(Number(n)));