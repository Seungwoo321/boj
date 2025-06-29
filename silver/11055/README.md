# 문제풀이: 11055 가장 큰 증가하는 부분 수열

## 문제 이해하기

먼저 문제를 차근차근 이해해봅시다:

- **증가하는 부분 수열**: 원래 수열에서 몇 개를 골라 만든 수열인데, 뒤로 갈수록 커지는 수열
- 예시: [1, 100, 2, 50, 60, 3, 5, 6, 7, 8]에서 [1, 2, 50, 60]을 고르면 1 < 2 < 50 < 60이므로 증가하는 부분 수열입니다
- **합이 가장 큰**: 이런 부분 수열 중에서 원소들의 합이 최대인 것을 찾아야 해요
- 주의: 꼭 연속된 원소를 고를 필요는 없어요! 순서만 유지하면 됩니다

## 힌트 1: 작은 예제로 시작하기

더 간단한 예제로 생각해봅시다.

수열 [1, 2, 3]이 있다면:
- [1]만 선택 → 합 = 1
- [2]만 선택 → 합 = 2  
- [3]만 선택 → 합 = 3
- [1, 2] 선택 → 합 = 3
- [1, 3] 선택 → 합 = 4
- [2, 3] 선택 → 합 = 5
- [1, 2, 3] 선택 → 합 = 6 (최대!)

수열 [3, 1, 2]가 있다면:
- [3]만 선택 → 합 = 3
- [1]만 선택 → 합 = 1
- [2]만 선택 → 합 = 2
- [1, 2] 선택 → 합 = 3 (1 < 2이므로 증가!)
- [3, ?]는 불가능 (3보다 큰 수가 뒤에 없음)

## 힌트 2: 각 위치에서의 최선 찾기

각 위치에서 끝나는 증가 부분 수열의 최대 합을 생각해봅시다.

예제 [1, 100, 2, 50, 60]에서:
- 1번째(1)에서 끝나는 경우: [1] → 합 = 1
- 2번째(100)에서 끝나는 경우: [100] 또는 [1, 100] → 최대 합 = 101
- 3번째(2)에서 끝나는 경우: [2] 또는 [1, 2] → 최대 합 = 3
- 4번째(50)에서 끝나는 경우: [50], [1, 50], [2, 50], [1, 2, 50] → 최대 합 = 53
- 5번째(60)에서 끝나는 경우: 여러 경우 중 [1, 2, 50, 60] → 최대 합 = 113

## 힌트 3: 동적 계획법(DP) 접근

DP[i]를 "i번째 원소를 마지막으로 하는 증가 부분 수열의 최대 합"이라고 정의해봅시다.

예를 들어:
- DP[0] = A[0] (첫 번째 원소만 포함)
- DP[1] = A[1]을 마지막으로 하는 증가 부분 수열의 최대 합
- DP[2] = A[2]를 마지막으로 하는 증가 부분 수열의 최대 합

## 힌트 4: 점화식 세우기

i번째 위치에서 생각해봅시다. A[i]를 마지막으로 하는 증가 부분 수열을 만들려면:

1. A[i] 혼자만 선택하거나
2. i보다 앞에 있는 원소 중에서 A[i]보다 작은 원소로 끝나는 부분 수열에 A[i]를 추가

따라서:
- DP[i] = A[i] + (0부터 i-1까지 중에서 A[j] < A[i]인 j에 대한 DP[j]의 최댓값)
- 만약 그런 j가 없다면 DP[i] = A[i]

## 힌트 5: 구체적인 계산 과정

수열 [1, 100, 2, 50, 60]에서:

- DP[0] = 1 (첫 번째 원소)
- DP[1] = 100 + max(1 < 100인 경우) = 100 + 1 = 101
- DP[2] = 2 + max(1 < 2인 경우) = 2 + 1 = 3
- DP[3] = 50 + max(1 < 50, 2 < 50인 경우) = 50 + max(1, 3) = 53
- DP[4] = 60 + max(1 < 60, 2 < 60, 50 < 60인 경우) = 60 + max(1, 3, 53) = 113

## 힌트 6: 최종 답 구하기

모든 DP 값을 계산한 후, 그 중 최댓값이 답입니다.

왜냐하면 증가 부분 수열은 어디서든 끝날 수 있기 때문이에요.

위 예제에서는 DP = [1, 101, 3, 53, 113]이므로 답은 113입니다.

## 힌트 7: 시간 복잡도 생각하기

- 각 위치 i에 대해 (N개)
- 그 이전의 모든 위치 j를 확인 (최대 N-1개)
- 따라서 시간 복잡도는 O(N²)

N이 최대 1,000이므로 충분히 빠르게 동작할 거예요.

## 힌트 8: 구현 방향

1. 입력을 받아 배열에 저장
2. DP 배열을 수열의 값으로 초기화 (각자 혼자만 선택하는 경우)
3. 이중 반복문으로 각 위치에서의 최대 합 계산
4. DP 배열에서 최댓값 찾아 출력

주의할 점:
- 증가하는 조건(A[j] < A[i])을 꼭 확인하세요
- DP[i]를 계산할 때 A[i]는 반드시 포함되어야 해요