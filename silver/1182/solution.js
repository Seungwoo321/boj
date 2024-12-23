const filePath = require('path').join(__dirname, 'input')
const [ns, arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
const [n, s] = ns.split(' ')

function solution (n, s, nums) {
  let count = 0
  for (let mask = 1; mask < (1 << n); mask ++) {
    let sum = 0
    for (let i = 0; i < n; i ++) {
      if (mask & (1 << i)) {
        sum += nums[i]
      }
    }
    if (sum === s) {
      count ++;
    }
  }
  return count
}

console.log(solution(+n, +s, arr.split(' ').map(v => +v)))