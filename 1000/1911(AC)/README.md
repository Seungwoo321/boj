# 문제풀이

물웅덩이를 모두 덮기 위한 널빤지의 최소 개수 구하기

## 입력

- 첫 째줄 n 과 l
  - n : 물웅덩이 개수
  - l : 널빤지의 길이
- n + 1 까지 각각의 웅덩이들이 정보
  - 시작위치 끝위치

## 로직

```bash
3 3
1 6
13 17
8 12
```

이렇게 입력이 주어지면 물웅덩이는 3개 널빤지의 길이는 3이다. 물웅덩이를 1이라고 하고 흙길을 0이라고 하면 물웅덩이 시작위치를 기준으로 오름차순 정렬 해서 다음과 같은 배열로 표현 할 수 있다.

좌표|0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16
-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-
웅덩이|0|1|1|1|1|1|0|0|1|1|1|1|0|1|1|1|1
널빤지|1|1|1|2|2|2|-|-|3|3|3|4|4|4|5|5|5

물웅덩이의 최대 길이가 10억이기때문에 이 방 물웅덩이를 0으로 변경해서 칠하는 방법으로는 풀수없고 `라이스위핑` 좌표만 순회하면서 널빤지 개수를 구해야 한다.

널빤지로 웅덩이를 막았을 때의 끝 위치와 물웅덩이의 시작 위치 중 큰 값을 다음 널빤지를 둘 시작위치로 덮어야하는 웅덩이의 크기를 구한다음 널빤지 길이인 3만큼 나누고 나머지가 있으면 올림 해서 좌표마다 필요한 널빤지 개수를 누적한다.

다음 3가지 경우가 고려되어야 한다.

1. 다음 물 웅덩이에 널빤지가 없는 경우
2. 다음 물 웅덩이에 널빤지가 이미 다 덮힌 경우
3. 다음 물 웅덩이에 널빤지가 일부 덮힌 경우

첫 풀이

```js
function solution (n, l, arr) {
    let nextPosition = 0; // 널빤지의 끝 위치
    let count = 0; // 좌표별 널빤지 개수
    let result = 0; // 누적 널빤지 개수
    arr.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < n; i ++) {
        const [start, end] = arr[i]; // 좌표

        // (1) 이미 웅덩이 끝에 널빤지가 놓여 있는 경우
        if (end <= nextPosition) continue;

        // (2) 널빤지 뒤에 웅덩이가 시작되는 경우
        if (nextPosition < start) {
            const size = (end - start)
            count = parseInt(size / l) + (size % l ? 1 : 0);
            nextPosition = start + (count * l);
        // (3) 웅덩이가 널빤지에 걸치는 경우
        } else {
            const size = (end - nextPosition)
            count = parseInt(size / l) + (size % l ? 1 : 0)
            nextPosition = nextPosition + (count * l);
        }
        result += count;
    }
    return result;
}
```

리팩토링

```js
function solution (n, l, arr) {
    let last = 0;
    let result = 0;
    arr.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < n; i ++) {
        if (arr[i][1] <= last) continue;
        const start = Math.max(arr[i][0], last);
        const count = Math.ceil((arr[i][1] - start) / l);
        last = start + (count * l);
        result += count;
    }
    return result;
```

## 맞왜틀

- 문제에서 주어진 최대 길이가 10억이기 때문에 라인스위핑으로 풀어야 한다.
