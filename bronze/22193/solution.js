const filePath = require('path').join(__dirname, 'input');
const [nm, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const multiply = (a, b) => {
    const c = new Array(a.length + b.length + 1).fill(0);
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            c[i + j] += a[i] * b[j];
        }
    }
    normalize(c);
    return c;
}
const normalize = (num) => {
    num.push(0);
    for (let i = 0; i + 1 < num.length; i++) {
        if (num[i] < 0) {
            let borrow = Math.ceil((Math.abs(num[i]) + 9) / 10);
            num[i + 1] -= borrow;
            num[i] += borrow * 10;
        } else {
            num[i + 1] += Math.floor(num[i] / 10);
            num[i] %= 10;
        }
    }
    while (num.length > 1 && num[num.length - 1] === 0) {
        num.pop();
    }
}

const addTo = (a, b, k) => {
    if (b.length === 0) return a;
    while (a.length < b.length + k) {
        a.push(0);
    }
    for (let i = 0; i < b.length; i++) {
        a[i + k] = (a[i + k] || 0) + b[i];
    }
    normalize(a);
    return a;
}

const subFrom = (a, b) => {
    for (let i = 0; i < b.length; i++) {
        a[i] = (a[i] || 0) - b[i];
    }
    normalize(a);
    return a
}

const karatsuba = (a, b) => {
    let an = a.length;
    let bn = b.length;
    if (an < bn) return karatsuba(b, a);
    if (an === 0 || bn === 0) return [];
    if (an <= 4) return multiply(a, b);

    let half = Math.floor(an / 2);
    
    let a0 = a.slice(0, half);
    let a1 = a.slice(half)
    let b0 = b.slice(0, Math.min(bn, half));
    let b1 = b.slice(Math.min(bn, half))

    let z0 = karatsuba(a0, b0);
    let z2 = karatsuba(a1, b1);
    let a0a1 = addTo(a0, a1, 0);
    let b0b1 = addTo(b0, b1, 0);
    
    let z1 = karatsuba(a0a1, b0b1);
    subFrom(z1, z0);
    subFrom(z1, z2);

    let result = [];
    addTo(result, z0, 0);
    addTo(result, z1, half);
    addTo(result, z2, half * 2);
    return result;
}

function solution(a, b) {
    return karatsuba(
        a.toString().trim().split('').reverse().map(Number),
        b.split('').reverse().map(Number)
    ).reverse().join('');
}
console.log(solution(arr.shift(), arr.shift()));