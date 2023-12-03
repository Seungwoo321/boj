const filePath = require('path').join(__dirname, 'input')
const [n, m] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(' ')

function solution (n, m) {
    const permutation = (function () {
        const results = []
        const recursive = (n, r, tmp = []) => {
            if (r === 0) {
                return results.push(tmp.join(' '))
            }
            for (let i = 1; i <= n; i ++) {
                tmp.push(i)
                recursive(n, r - 1, tmp)
                tmp.pop()
            }
        }
        recursive(n, m)
        return results.join('\n')
    }())
    return permutation
}

console.log(solution(+n, +m))

module.exports = {
    solution
}