const filePath = require('path').join(__dirname, 'input');
const [t, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
class Trie {
    constructor () {
        this._node = new Array(10)
        this._isEnd = false
    }
    add (str) {
        if (!str || !str.length) return
        let nodes = this._node
        let curr = null
        for (let i = 0; i < str.length; i ++) {
            let num = +str[i];
            if (!nodes[num]) {
                nodes[num] = new Trie()
            }
            curr = nodes[num];
            nodes = nodes[num]._node
        }
        curr._isEnd = true
    }
    check (str) {
        let nodes = this._node
        let curr = null
        for (let i = 0; i < str.length; i++) {
            let num = +str[i]
            curr = nodes[num]
            if (!curr) return false
            if (curr?._isEnd && i < str.length - 1) {
                return false
            }
            nodes = curr._node
        }
        return true
    }
}
function solution (t, arr) {
    let test = 0;
    let i = 0;
    while (test++ < t) {
        const n = +arr[i++];
        const list = arr.slice(i, i + n);
        const trie = new Trie();
        list.forEach(v => trie.add(v));
        const check = list.some(v => !trie.check(v))
        console.log(check ? 'NO' : 'YES');
        i += n;
    }
}
solution(+t, arr);