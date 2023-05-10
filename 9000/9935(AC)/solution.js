const filePath = './input'
const [a, b] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution (a, b) {
    const stack = [];
    let n = a.length
    for (let i = 0; i < n; i ++) {
        stack.push(a[i]);
        if (stack.length >= b.length && stack[stack.length - 1] === b[b.length - 1]) {
            if (stack.slice(-b.length).join('') === b) {
                stack.splice(-b.length);
            }
        }
    }
    return stack.join('') || 'FRULA';
}
console.log(solution(a, b));

// 문자열을 새로 만드는 대신 배열을 사용한다
// slice는 원본의 부분 배열 복사본을 참조하기 때문에 메모리 초과가 발생하지 않는다.
