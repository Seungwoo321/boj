# 문제풀이

- 약수의 합
- 골드4
- 1초 / 512MB

```bash
./run.sh 17425/solution.js 1 512
```

테스트 케이스만큼 자연수 n보다 작거나 같은 수에 대해서 각 수의 모든 약수를 더한다.

## 입력

t: 테스트 케이스의 수
n: 자연수

## 로직

에라토스테네스의 체의 응용 문제다. 약수가 아닌 수를 체크해서 소수를 구하는 로직을 이용해서 미리 모든 약수의 합을 구한다.

## 맞왜틀

- 17427에서 푼 방법대로 할 경우 시간초과가 발생한다.

## 리팩토링
