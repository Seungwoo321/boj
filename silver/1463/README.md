
# 문제풀이: 1463 1로 만들기

```js

function solution (n) {
  const makeOne = (num, count) => {
    if (num === 1) return count
    if (num % 2 === 0) {
      return Math.min(makeOne(num / 2, count + 1), makeOne(num - 1, count + 1))
    }
    if (num % 3 === 0) {
      return Math.min(makeOne(num / 3, count + 1), makeOne(num - 1, count + 1))
    }
    return makeOne(num - 1, count + 1)
  }
  return makeOne(n, 0)
}
```

```js
function solution (n) {
  const dp = new Array(n + 1).fill(0)
  for (let i = 2; i <= n; i ++) {
    dp[i] = dp[i - 1] + 1
    if (i % 2 === 0 && i % 3 === 0) {
      dp[i] = Math.min(dp[i / 2] + 1, dp[i / 3] + 1, dp[i])
      continue
    }
    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i / 2] + 1, dp[i])
      continue
    }
    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i / 3] + 1, dp[i])
      continue
    }
  }
  return dp[n]
}
```

```js
function solution (n) {
  const dp = new Array(n + 1).fill(0)
  for (let i = 2; i <= n; i ++) {
    dp[i] = dp[i - 1] + 1
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1)
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1)
  }
  return dp[n]
}
```
