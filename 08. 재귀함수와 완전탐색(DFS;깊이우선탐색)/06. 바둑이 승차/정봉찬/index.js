/*
✅문제 제목: 바둑이 승차

✅문제 유형: DFS

✅문제 풀이 날짜: 2024-08-21

💡문제 분석 요약
  - N마리의 바둑이를 C킬로그램 트럭에 최대한 많이 태울 때 가장 무거운 무게를 구한다.

💡알고리즘 설계
  - 탐색 여부를 저장할 배열 ch를 배열의 길이만큼 각 요소를 0으로 초기화한다.
  - 재귀 함수는 인덱스를 받는다. 첫 재귀 함수 호출 인수는 0으로 시작한다.
  - 탐색한 경우 ch에서 해당 인덱스의 요소를 1로 할당 후 인덱스 + 1로 재귀 함수를 돈다.
  - 탐색하지 않은 경우 ch에서 해당 인덱스의 요소를 0으로 할당 후 인덱스 + 1로 재귀 함수를 돈다.
  - 인덱스가 배열의 길이와 같을 때 배열의 길이만큼 반복문을 돌며 탐색한 요소를 sum에 더한다.
  - 반복문이 종료된 후 sum이 c보다 작거나 같을 때 answer와 sum 중에서 큰 값을 answer에 할당한다.
*/

function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  const ch = Array.from({ length: arr.length }, () => 0);

  function DFS(idx) {
    if (idx === arr.length) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        if (!ch[i]) {
          continue;
        }

        sum += arr[i];
      }

      if (sum <= c) {
        answer = Math.max(answer, sum);
      }

      return;
    }

    ch[idx] = 1;
    DFS(idx + 1);
    ch[idx] = 0;
    DFS(idx + 1);
  }

  DFS(0);

  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr)); // 242
let arr2 = [81, 58, 42, 33, 61, 17];
console.log(solution(259, arr2)); // 259

/*
✅문제 제목: 바둑이 승차

✅문제 유형: DFS

✅문제 풀이 날짜: 2024-08-21

💡문제 분석 요약
  - N마리의 바둑이를 C킬로그램 트럭에 최대한 많이 태울 때 가장 무거운 무게를 구한다.

💡알고리즘 설계
  - 재귀 함수의 인수로 인덱스와 바둑이 무게 합을 넘겨준다.
  - 바둑이를 태운 경우 다음 재귀 함수의 인수로 다음 인덱스와 바둑이 무게를 합친 값을 넘겨준다.
  - 태우지 않은 경우 다음 재귀 함수의 인수로 다음 인덱스와 넘어온 값을 넘겨준다.
  - 모든 노드를 탐색했을 경우(매개변수의 인덱스가 배열의 길이와 같을 때) answer와 sum을 비교해서 더 큰 값을 answer에 넣어준다.
  - sum이 c를 넘어서면 함수를 종료한다.
*/

function solution2(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  function DFS(idx, sum) {
    if (sum > c) {
      return;
    }

    if (idx === arr.length) {
      answer = Math.max(answer, sum);
      return;
    }

    DFS(idx + 1, sum + arr[idx]);
    DFS(idx + 1, sum);
  }

  DFS(0, 0);

  return answer;
}

console.log(solution2(259, arr)); // 242
console.log(solution2(259, arr2)); // 259
