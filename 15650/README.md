# 문제풀이

자연수 N과 M이 주어졌을 때 1부터 N까지 자연수 중에서 중복없이 M개를 고른 수열을 오름차순으로 출력

## 입력

- n, m: 자연수 (1 <= M <= N <= 8)

## 로직

순서가 중요하지 않은 조합 문제다.

조합 함수

```js
function solution (n, m) {
    const combination = (function () {
        const results = [];
        const recursive = (n, r, depth, tmp = []) => {
            if (r === 0) {
                return results.push(tmp.join(' '));
            }
            for (let i = depth; i <= n; i++) {
                tmp.push(i);
                recursive(n, r - 1, i + 1, tmp.slice());
                tmp.pop();
            }
        }
        recursive(n, m, 1);
        return results;
    }());
    return combination.join('\n');
}
```

## 맞왜틀

## 리팩토링
