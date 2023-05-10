const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lineCounter = 0;
let [N, K] = [0, 0];
let [stones, bags] = [[], []];

rl.on("line", (line) => {
    if (lineCounter === 0) {
        [N, K] = line.toString().trim().split(' ').map(Number)
    } else if (lineCounter <= N) {
        stones.push(line.toString().trim().split(' ').map(Number))
    } else if (lineCounter <= N + K) {
        bags.push(Number(line.toString().trim()));
    } else {
        rl.close()
    }
    lineCounter++;
})
rl.on("close", () => {
    console.log(solution(N, K, stones, bags))
})
class Heap {
    constructor(compare, maxSize) {
        this._compare = compare
        this._maxSize = maxSize
        this._data = new Array(maxSize + 1)
        this._size = 0
    }
    _parent(position) {
        return parseInt(position / 2)
    }
    _leftChild(position) {
        return (2 * position)
    }
    _rightChild(position) {
        return (2 * position) + 1
    }
    _swap(i, j) {
        [this._data[i], this._data[j]] = [this._data[j], this._data[i]]
    }
    _heapifyUp(childIndex) {
        let parentIndex = this._parent(childIndex)
        while (this._compare(this._data[parentIndex], this._data[childIndex])) {
            this._swap(parentIndex, childIndex)
            childIndex = parentIndex
            parentIndex = this._parent(childIndex)
        }
    }
    _compareChildrenOf(parentIndex) {
        const [left, right] = [this._leftChild(parentIndex), this._rightChild(parentIndex)]
        if (left > this._size && right > this._size) {
            return -1
        }
        if (left > this._size) {
            return right
        }
        if (right > this._size) {
            return left
        }
        return this._compare(this._data[left], this._data[right]) ? right : left
    }
    _heapifyDown(parentIndex) {
        let childIndex = this._compareChildrenOf(parentIndex)
        while (this._compare(this._data[parentIndex], this._data[childIndex])) {
            this._swap(parentIndex, childIndex)
            parentIndex = childIndex
            childIndex = this._compareChildrenOf(parentIndex)
        }
    }
    insert(value) {
        this._data[++this._size] = value
        this._heapifyUp(this._size)
    }
    pop() {
        const top = this._data[1]
        this._data[1] = this._data[this._size--]
        this._heapifyDown(1)
        return top
    }
    peek() {
        return this._data[1]
    }
    size() {
        return this._size
    }
}
function solution(n, k, stones, bags) {
    stones.sort((a, b) => a[0] - b[0]);
    bags.sort((a, b) => a - b);
    const pq = new Heap((a, b) => b - a > 0, n + 1)
    let sum = 0;
    let j = 0;
    for (let i = 0; i < k; i++) {
        while (j < n && stones[j][0] <= bags[i]) {
            pq.insert(stones[j++][1]);
        }
        if (pq.size()) {
            sum += pq.pop()
        }
    }
    return sum;
}
