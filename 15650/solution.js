const filePath = require('path').join(__dirname, 'input')
const [n, m] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(' ')

// 배열을 순회하면서 재귀 호출과 map함수로 새 배열을 만든다
function solution (n, m) {
    const nums = Array.from({ length: n }, (_, i) => i + 1);
    const combination = (arr, r) => {
        const results = [];
        if (r === 1) return arr.map(v => [v]);
        arr.forEach((fixed, index, origin) => {
            if (index === origin.length - 1) return;
            const rest = origin.slice(index + 1);
            const combi = combination(rest, r - 1);
            const attached = combi.map(combinations => [fixed, ...combinations]);
            results.push(...attached);
        })
        return results;
    }
    return combination(nums, m, 0).map(items => items.join(' ')).join('\n');
}


// dfs 함수에서 외부의 results를 직접 변경하지만 익명함수로 감싸고 있어서 외부에서 접근 할 수 없기때문에 문제가 되지 않는다.
// 그래서 순수 함수로 간주할 수 있다.

function solution2 (n, m) {
    const combination = (function () {
        const results = [];
        const dfs = (n, r, start, tmp = []) => {
            if (r === 0) return results.push(tmp);
            for (let i = start; i <= n; i++) {
                tmp.push(i);
                dfs(n, r - 1, i + 1, tmp.slice());
                tmp.pop();
            }
        }
        dfs(n, m, 1);
        return results;
    }());
    return combination.map(arr => arr.join(' ')).join('\n');
}



// 조합 함수 안에서 내부 dfs 함수를 호출한다.
function solution3 (n, m) {
    const results = [];
    (function dfs (n, r, start, tmp = []) {
        if (r === 0) return results.push(tmp.join(' '));
        for (let i = start; i <= n; i++) {
            tmp.push(i);
            dfs(n, r - 1, i + 1, tmp);
            tmp.pop();
        }
    }(n, m, 1));
    return results.join('\n');
}

function solution4  (n, m) {
    const results = [];
    const dfs = (n, r, start, tmp = []) => {
        if (r === 0) return results.push(tmp.join(' '));
        for (let i = start; i <= n; i++) {
            tmp.push(i);
            dfs(n, r - 1, i + 1, tmp);
            tmp.pop();
        }
    }
    dfs(n, m, 1);
    return results.join('\n');
}

const combination = (function (n, m) {
    let results = [];
    const dfs = (n, r, start, tmp = []) => {
        if (r === 0) return results.push(tmp.join(' '));
        for (let i = start; i <= n; i++) {
            tmp.push(i);
            dfs(n, r - 1, i + 1, tmp);
            tmp.pop();
        }
    }
    dfs(n, m, 1);
    return results.join('\n');
}(+n, +m));

console.log(solution(+n, +m))
console.log(solution2(+n, +m))
console.log(solution3(+n, +m))
console.log(solution4(+n, +m))
console.log(combination);

module.exports = {
    solution,
    solution2,
    solution3,
    solution4
}
