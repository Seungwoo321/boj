# 문제풀이 1182

## 1. 공집합 제외 부분집합 구하기

공집합을 제외하고 N개의 원소로 만들 수 있는 모든 부분집합을 순회합니다.

- 1 << N : 2^N, 부분집합의 총 개수를 나타냅니다.
- mask : 비트마스크로 부분집합을 표현합니다.
  - 예시. mask = 5 (101)은 첫 번째와 세 번째 원소가 포함된 부분집합을 나타냅니다.

```js
for (let mask = 1; mask < (1 << N); mask ++) {
 console.log(mask);
}

```

## 2. i가 포함된 부분집합의 합 계산

현재 비트마스크에 따라 부분집합의 합을 계산합니다.

- mask & (1 << i) : mask의 i번째 비트가 1인지 확인.
  - 참이면 i번째 원소를 부분집합에 포함하고 sum에 더합니다.
- 모든 원소를 순회하며 sum에 포함 여부를 반영합니다.

```js
  let sum = 0;
  for (let i = 0; i < N; i ++) {
    if (mask & (1 << i)) {
      sum += nums[i]
    }
  }

```

## 3. 조건을 만족하면 카운트 증가

부분집합의 합이 구하려는 값과 같을 때만 카운트를 증가시킵니다.

```js
 if (sum === S) {
  count ++ 
 }

```
