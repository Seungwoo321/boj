# 문제풀이

학생들한테 같은 종류의 보석을 나눠줄 때 가장많은 보석을 가진 학생이 가진 보석의 수가 최소가 되는 값을 구한다.

> `학생이 가지는 가장 많은 보석의 값이 ~일 때가 가능한지`를 확인하는 결정 문제로 바꿔서 이분 탐색으로 풀이한다.

## 입력

- n, m : 학생의 수(n), 보석의 종류(m)
- m개의 줄에 보석의 갯수

## 로직

1. 1개를 left, 보석의 최대 갯수를 right로 선언한다.
2. left < right 이면 이분탐색을 한다.
    1. 최대 나누어주는 갯수를 mid라고 할 때 받는 사람이 학생 수 보다 크면 false, 작거나 같으면 true를 반환한다.
    2. 보석을 받는 사람이 학생 수보다 작거나 같으면 right 를 mid 보다 작은 값으로 갱신해서 더 작은 보석으로 나누어 줄 수 있는지를 확인한다.
    3. 보석을 받는 사람이 학생 수보다 크면 left를 mid로 갱신해서 더 큰 값으로 나눠서 보석이 다 나눠지는 갯수를 찾는다.

## 맞왜틀

- mid를 구할 때 (left + right)를 괄호로 감싸지 않고 / 2를 해서 시간초과가 출력되었다.
- 이분탐색 조건과 left, right 값을 잘못 갱신하면 시간초과가 발생하거나 답이 틀렸다.

## 리팩토링

- 보석을 나눠주면 몇명이 받는지를 계산 할 때 끝까지 계산하지 않고 학생 수보다 넘으면 반환 하면 조금 더 빠르다.
- 보석을 나눠줄 때 나머지 연산자로 나머지가 있을 경우 +1을 더하는 조건문을 사용했을 때 약 1200ms 이상의 시간이 걸렸고 Math.ceil로 올림 하니까 약 400ms로 1/3 정도의 시간이 단축되었다.
