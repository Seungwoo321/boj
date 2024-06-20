# 문제풀이

- N*M 와 M*K 의 행렬의 곱셈

```js
    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < l; j ++) {
            for (let k = 0; k < m; k ++) {
                matrix[i][j] += a[i][k] * b[k][j];
            }
        }
    }
```

## 맞왜틀

- 3중 for문을 잘못된 순서로 돌려서 런타임 에러(RangeError) 발생함
- 20번 시도만에 해결
