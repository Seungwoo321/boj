# 문제풀이

자연수 N과 M이 주어졌을 때 1부터 N까지 자연수 중에서 같은 수를 여러번 고르는 경우를 포함하여 M개를 고른 수열을 오름차순으로 출력

## 입력

- n, m: 자연수

## 로직

순서가 중요하지 않은 조합 문제다. 그런데 같은 수를 중복해서 고를 수 있다. `15650` 조합문제와 차이점은 같은 숫자를 여러번 고르는 경우를 포함하기 위해서 재귀함수에서 i의 인덱스를 증가시키지 않고 호출한다.

조합 함수

```js
function solution (n, m) {
    const combination = (function (n, r) {
        const results = []
        const recursive = (n, r, depth, tmp = []) => {
            if (r === 0) {
                return results.push(tmp.join(' '));
            }
            for (let i = depth; i <= n; i ++) {
                tmp.push(i);
                recursive(n, r - 1, i, tmp);
                tmp.pop();
            }
        }
        recursive(n, r, 1);
        return results.join('\n');
    }(n, m));
    return combination
}
console.log(solution(+n, +m));
```

## 맞왜틀

## 리팩토링
