const filePath = require('path').join(__dirname, 'input');
const [t, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (t, arr) {
    let n = 0;
    const answer = [];
    for (let i = 0; i < t; i ++) {
        const map = new Map();
        const count = +arr[n++];
        for (let j = n; j < (n + count); j ++) {
            const type = arr[j].split(' ')[1];
            map.set(type, (map.get(type) || 0) + 1);
        }
        n += count;
        let result = 1;
        map.forEach(value => result *= (value + 1));
        answer.push(result - 1);
    }
    return answer.join('\n');
}
console.log(solution(+t, arr))