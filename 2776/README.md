# 문제풀이

수첩2에 적힌 숫자를 순서대로 순회하면서 수첩1에도 있는지를 찾아서 있으면 1 없으면 0을 출력한다. O(n)으로도 풀 수 있겠지만 O(nlogn)으로 풀수 있는 이분탐색 문제.

```bash
./run.sh 2776/solution.js 2 256
```

## 입력

- t: 테스트 케이스
  - n: 수첩1에 적힌 정수들의 갯수
  - nArr: 수첩1에 적힌 정수들
  - m: 수첩2에 적힌 정수들의 갯수
  - mArr: 수첩2에 적힌 정수들

## 로직

1. 입력을 받는다.
2. 답을 한번에 출력하기 위한 answer 배열을 선언한다.
3. 테스트 케이스 만큼 반복한다.
    1. 수첩2의 정수를 오름차순으로 정렬한다.
    2. 수첩2의 배열크기로 최소/최대값을 정의한다.
    3. 이분탐색을 수행한다.
        1. 수첩2의 정수 배열의 중심 위치를 구한다.
        2. 선택한 정수가 수첩에 1에 있는지 확인한다.
        3. 수첩1의 수가 크면 더 작은 숫자를 확인하기 위해 최대값을 갱신한다.
        4. 수첩2의 수가 작으면 더 큰 숫자를 확인하기 위해 최소 값을 갱신한다.
        5. 수첩2의 숫자와 일치하면 answer에 push 하고 이분탐색을 종료한다.
        6. 최소값이 최대값보다 커질때까지 없으면 찾는 숫자가 없으면 0을 push한다
4. answer를 반환한다.

## 맞왜틀

- 찾는 숫자가 target 보다 크지도 않고 작지도 않으면 같을거라고 생각하고 else문으로 처리하면 arr[mid]가 undefined 가 될 수 있어서 틀린 답이 출력된다. 따라서 if 문이나 else if에서 확실하게 `arr[mid] === target` 조건으로 체크 해야한다.

```js
// wrong answer
if (arr[mid] > target) {
    right = mid - 1;
} else if (arr[mid] < target) {
    left = mid + 1;
} else {
    result = 1;
    break;
}
```

## 리팩토링
