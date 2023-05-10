const filePath = require('path').join(__dirname, 'input');
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [m, n] = input[1].split(' ');
const mArr = input.slice(2, +m + 2).map(Number);
const nArr = input.slice(+m + 2).map(Number);
function solution (target, m, n, mArr, nArr) {
    const pizzaA = [...mArr, ...mArr];
    const pizzaB = [...nArr, ...nArr];
    for (let i = 1; i < pizzaA.length; i ++) {
        pizzaA[i] += pizzaA[i - 1];
    }
    for (let i = 1; i < pizzaB.length; i ++) {
        pizzaB[i] += pizzaB[i - 1];
    }
    const count = (n, arr) => {
        const countMap = new Map()
        for (let i = 1; i < n; i ++) {
            for (let j = 0; j < n; j++) {
                let sum = arr[i + j] - arr[j];
                countMap.set(sum, (countMap.get(sum) || 0) + 1);
            }
        }
        countMap.set(arr[n - 1], 1);
        return countMap;
    }
    const aCount = count(m, pizzaA);
    const bCount = count(n, pizzaB);
    let answer = 0;
    for (let i = 1; i <= target; i ++) {
        if (aCount.has(i) && bCount.has(target - i)) {
            answer += (aCount.get(i) * bCount.get(target - i));
        }
    }
    return answer + (aCount.get(target) || 0) + (bCount.get(target) || 0);

}
console.log(solution(+input[0], +m, +n, mArr, nArr));