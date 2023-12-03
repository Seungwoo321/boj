const filePath = './input'
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
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
const [N, K] = input.shift().split(' ').map(Number);
function solution(n, k, arr) {
    const stones = arr.slice(0, n).map(v => v.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);
    const bags = arr.slice(n).map(Number).sort((a, b) => a - b);
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
console.log(solution(N, K, input));