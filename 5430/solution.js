const filePath = './input'
const [T, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution (t, data) {
    const answer = [];
    while (t--) {
        const [command, length] = [data.shift(), Number(data.shift())];
        const str = data.shift()
        const arr = JSON.parse(str);
        // const arr = length === 0 ? [] : str.substring(1, str.length - 1).split(',').map(Number);
        // const arr = [];
        // let n = 0;
        // for (let i = 0; i < str.length; i ++) {
        //     if (str[i] === '[' || str[i] == ']') continue;
        //     if (str[i] === ',') {
        //         arr.push(n);
        //         n = 0;
        //     } else {
        //         n = n === 0 ? +str[i] : n * 10 + +str[i];
        //     }
        // }
        // n !== 0 && arr.push(n)
        let [error, reverse] = [false, false];
        let [start, end] = [0, length];
        for (let i = 0; i < command.length; i ++) {
            if (command[i] === 'R') reverse = !reverse;
            else start < end ? (reverse ? end -- : start ++) : error = true;
        }
        if (error) answer.push('error');
        else answer.push('[' + (reverse ? arr.slice(start, end).reverse() : arr.slice(start, end)).join(',') + ']');
    }
    return answer.join('\n');
}

console.log(solution(T, arr));