const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
class Heap {
    constructor(compare, maxSize) {
        this._compare = compare
        this._data = new Array(maxSize + 1)
        this._size = 0
    }
    _swap(i, j) {
        [this._data[i], this._data[j]] = [this._data[j], this._data[i]]
    }
    insert(value) {
        this._data[++this._size] = value
        let childIndex = this._size
        let parentIndex = parseInt(childIndex / 2)
        while (this._compare(this._data[parentIndex], this._data[childIndex])) {
            this._swap(parentIndex, childIndex)
            childIndex = parentIndex
            parentIndex = parseInt(childIndex / 2)
        }
    }
    pop() {
        if (this._size === 0) return undefined
        const top = this._data[1]
        this._data[1] = this._data[this._size--]
        let parentIndex = 1
        let childIndex = parentIndex * 2
        while (childIndex <= this._size) {
            if (childIndex + 1 <= this._size && this._compare(this._data[childIndex], this._data[childIndex + 1])) {
                childIndex++
            }
            if (this._compare(this._data[childIndex], this._data[parentIndex])) {
                break
            }
            this._swap(childIndex, parentIndex)
            parentIndex = childIndex
            childIndex = parentIndex * 2
        }
        return top
    }
    peek() {
        return this._data[1]
    }
    size() {
        return this._size
    }
}
function solution (n, arr) {
    const maxHeap = new Heap((a, b) => b - a > 0, n + 1)
    const minHeap = new Heap((a, b) => a - b > 0, n + 1)
    let answer = ''
    for (let i = 0; i < n; i ++) {
        const num = Number(arr[i])
        if (maxHeap.size() === minHeap.size()) {
            maxHeap.insert(num)
        } else {
            minHeap.insert(num)
        }
        if (minHeap.size() && maxHeap.peek() > minHeap.peek()) {
            maxHeap.insert(minHeap.pop())
            minHeap.insert(maxHeap.pop())
        }
        answer += maxHeap.peek() + '\n'
    }
    return answer.trim()
}
console.log(solution(Number(n), arr))