const [a, b] = require('fs')
    .readFileSync('./input')
    .toString()
    .trim()
    .split('\n');

console.log(a.split('').reduce((acc, cur) => {
    acc.push(cur);
    if (b[b.length - 1] === cur && acc.slice(-b.length).join('') === b) acc.splice(-b.length);
    return acc;
}, []).join('') || 'FRULA');
