# 문제풀이

- n개의 정수로 이루어진 배열 A 제공
- [A[0] - A[1]] + [A[1] - A[2]] + ... + [A[n - 2] - A[n -1]]의 가장 큰 값 구하기

## 로직

- solution1. 모든 순열을 만들면서 최대값을 구한다.
- solution2. 내림차순 정렬 후 사전순으로 정렬된 다음 순열 구하기 로직을 사용해서 모든 순열을 만들면서 최대값을 구한다.
- 비교: solution1이 solution2보다 빠르다
