# 문제풀이

- 약수의 합 2
- 실버2
- 0.5초 / 512MB

```bash
./run.sh 17427/solution.js 0.5 512
```

자연수 n보다 작거나 같은 수에 대해서 각 수의 모든 약수를 더한다.

## 입력

n: 자연수

## 로직

약수의 법칙

- 자연수 N이하의 수들은 A를 약수로 (N 나누기 A)개를 가진다.

풀이1

자연수 5의 약수의 합 => f(5) = 1 + 5  = 6  
자연수 4의 약수의 합 => f(4) = 1 + 2 + 4 = 7  
자연수 3의 약수의 합 => f(3) = 1 + 3 = 4  
자연수 2의 약수의 합 => f(2) = 1 + 2 = 3  
자연수 1의 약수의 합 => f(1) = 1  
g(5) = 6 + 7 + 4 + 3 + 1 = 21

풀이2

자연수 N이 5일 때 5이하의 수가 1을 약수로 가지는 수는 5개, 2를 약수로 가지는 수는 2개, 3을 약수로 가지는 수는 1개, 4를 약수로 가지는 수는 1개, 5를 약수로 가지는 수는 1개로 (1*5)+(2*2)+(3*1)+(4*1)+(5*1) = 5 + 4 + 3 + 4 + 5 = 21 이 된다.

정리

따라서 자연수 N이하의 수들의 모든 약수의 합은 N / (N이하의수) 로 나눈 몫에 N이하의 수를 곱해서 더하면 된다.

## 맞왜틀

- 입력을 받아서 1 부터 n 까지 순회하면서 각 숫자의 모든 약수를 더하면 시간초과로 실패한다.

## 리팩토링
