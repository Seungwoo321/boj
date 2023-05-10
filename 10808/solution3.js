console.log(require('fs').readFileSync('./input').toString().trim().split('').reduce((acc, cur) => {
    acc[cur.charCodeAt() - 97]++;
    return acc;
}, new Array(26).fill(0)).join(' '));