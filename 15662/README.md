# 문제풀이

## 입력

- t: 톱니바퀴의 개수
- tArr: t개 줄 만큼 톱니바퀴의 상태
- k: 회전 횟수
- kArr: 회전 방법 (회전시킬 톱니바퀴 / 1이면 시계, -1이면 반시계)

## 로직

1. 톱니바퀴 회전 함수를 작성
2. 왼쪽으로 몇번째 톱니바퀴까지 회전하면 되는지 구하는 함수를 작성
3. 오른쪽으로 몇번째 톱니바퀴까지 회전하면 되는지 구하는 함수를 작성
4. k번 반복한다
    1. -1 이면 0 아니면 1로 방향값을 바꾼다 (-1, 1이 아니라 홀수/짝수로 시계 반시계 방향을 구분하기 위해서)
    2. (2)함수로 구한 인덱스까지 왼쪽으로 회전한다
    3. (3)함수로 구한 인덱스까지 오른쪽으로 회전한다
5. 회전한 톱니바퀴의 0번째가 1인 개수를 구해서 반환

## 맞왜틀
