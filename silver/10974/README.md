# 문제풀이

- 모든 순열
- 실버3

n이 주어지면 1부터 n까지 이루어진 모든 순열을 사전순으로 출력한다

## 로직

다음번째 사전순 순열을 구한다 

    Step1.
    P[i] < P[i + 1] 인 가장 큰 i를 찾는다

    Step2.
    P[i] < P[j] 인 가장 큰 j를 찾는다

    Step3.
    P[i]와 P[j]의 위치를 바꾼다

    Step4.
    P[i+1 ... n] 를 뒤집는다

위 로직을 !n 만큼 반복한다

## Reference

- <https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering>
- <https://www.youtube.com/watch?v=goUlyp4rwiU>