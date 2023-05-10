const filePath = './input'
const [a, b] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution (a, b) {
    let answer = '';
    let n = a.length
    for (let i = 0; i < n; i ++) {
        answer += a[i];
        if (answer.length >= b.length && answer.substring(answer.length - b.length) === b) {
            answer = answer.substring(0, answer.length - b.length);
        }
    }
    return answer || 'FRULA';
}
console.log(solution(a, b));

// 메모리 초과
// 문자열은 복사본을 만들어서 대체하기 때문에 메모리를 더 많이 사용한다