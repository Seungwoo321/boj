const filePath = './input'
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()

function solution (str) {
    const [pi, ka, chu] = ['pi', 'ka', 'chu'];
    for (let i = 0; str.length; i ++) {
        const pika = str[i] + str[i + 1];
        if (pika === pi || pika === ka) i += 1;
        else if (pika + str[i + 2] === chu) i += 2;
        else return i >= str.length ? 'YES' : 'NO';
    }
    return 'YES';
}

console.log(solution(input));