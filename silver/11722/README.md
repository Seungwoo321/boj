# 문제풀이: 11722 가장 긴 감소하는 부분 수열

## 문제 이해하기

먼저 문제의 핵심을 파악해봅시다:

- **부분 수열**: 원래 수열에서 일부 숫자를 골라낸 것 (순서는 유지!)
- **감소하는 부분 수열**: 골라낸 숫자들이 점점 작아지는 수열
- 예시: {10, 30, 10, 20, 20, 10}에서
  - {30, 20, 10}은 감소하는 부분 수열 ✓
  - {30, 10}도 감소하는 부분 수열 ✓
  - {10, 30}은 감소하는 부분 수열이 아님 ✗ (증가함)

## 힌트 1: 작은 예제로 시작하기

간단한 수열로 시작해봅시다.

수열 {5, 3, 7, 1}에서 감소하는 부분 수열을 찾아보면:
- 길이 1: {5}, {3}, {7}, {1} (각각 하나씩)
- 길이 2: {5, 3}, {5, 1}, {3, 1}, {7, 1}
- 길이 3: {5, 3, 1}, {7, 3, 1}

가장 긴 것은 길이 3입니다!

## 힌트 2: 각 위치에서 끝나는 부분 수열 생각하기

각 숫자를 "마지막 원소"로 하는 감소하는 부분 수열을 생각해봅시다.

예시 {10, 30, 10, 20, 20, 10}에서:
- 첫 번째 10에서 끝나는 경우: {10} (길이 1)
- 두 번째 30에서 끝나는 경우: {30} (길이 1)
- 세 번째 10에서 끝나는 경우: {30, 10} (길이 2)
- 네 번째 20에서 끝나는 경우: {30, 20} (길이 2)
- ...

## 힌트 3: 동적 계획법(DP) 접근

DP[i]를 "i번째 원소에서 끝나는 가장 긴 감소하는 부분 수열의 길이"라고 정의해봅시다.

예를 들어:
- DP[0] = 1 (첫 번째 원소만으로 이루어진 수열)
- DP[1] = ?
- DP[2] = ?

각 DP[i]를 어떻게 구할 수 있을까요?

## 힌트 4: 이전 원소들 확인하기

i번째 원소를 마지막으로 하는 감소하는 부분 수열을 만들려면:

1. i번째 원소 하나만으로 수열을 만들거나 (길이 1)
2. i보다 앞에 있는 원소 중 **i번째 원소보다 큰 값**에서 이어받아 만들기

왜 큰 값이어야 할까요? 감소하는 수열이니까 앞의 숫자가 더 커야 합니다!

## 힌트 5: 점화식 세우기

i번째 위치의 값을 A[i]라고 하면:

- j < i이고 A[j] > A[i]인 모든 j에 대해
- DP[i] = max(DP[i], DP[j] + 1)

쉽게 말해:
1. 나(i)보다 앞에 있고(j < i)
2. 나보다 큰 값(A[j] > A[i])을 가진 위치들을 찾아서
3. 그 위치에서 끝나는 가장 긴 수열에 나를 붙이면 됩니다!

## 힌트 6: 초기값과 기본값

- 모든 DP[i]의 초기값은 1입니다 (자기 자신만으로 이루어진 수열)
- 만약 앞에 자신보다 큰 원소가 없다면? DP[i]는 1로 유지됩니다

## 힌트 7: 최종 답 구하기

모든 위치에 대해 DP 값을 구한 후:
- 답 = max(DP[0], DP[1], ..., DP[N-1])

왜일까요? 감소하는 부분 수열은 어디서든 끝날 수 있기 때문입니다!

## 힌트 8: 시뮬레이션 해보기

{10, 30, 10, 20, 20, 10}에 대해 직접 계산해봅시다:

1. DP[0] = 1 (수열: {10})
2. DP[1] = 1 (30 > 10이므로 이을 수 없음, 수열: {30})
3. DP[2] = 2 (30 > 10이므로 DP[1]+1, 수열: {30, 10})
4. DP[3] = 2 (30 > 20이므로 DP[1]+1, 수열: {30, 20})
5. 이런 식으로 계속...

## 힌트 9: 구현 방향

1. DP 배열을 모두 1로 초기화
2. 각 위치 i에 대해:
   - i보다 앞의 모든 위치 j를 확인
   - A[j] > A[i]이면 DP[i] 갱신
3. DP 배열에서 최댓값 찾기

이 문제의 핵심은 "각 위치에서 끝나는 최적해를 구하고, 전체 최적해를 찾는다"는 DP의 기본 원리입니다!