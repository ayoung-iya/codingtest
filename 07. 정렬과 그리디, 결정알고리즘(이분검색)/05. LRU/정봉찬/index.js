/*
✅문제 제목: LRU

✅문제 유형: 정렬

✅문제 풀이 날짜: 2024-08-14

💡문제 분석 요약
  - 캐시 사이즈가 주어진다.
  - 해야할 작업이 캐시에 있다면 맨 앞으로 끌어올리고 나머지 캐시는 뒤로 밀린다.
  - 해야할 작업이 캐시에 없다면 맨 앞에 위치하고 캐시 사이즈를 초과한다면 제일 마지막 캐시를 지운다.

💡알고리즘 설계
  - i = 0 부터 배열의 길이만큼 반복하는 반복문을 선언한다.
  - 캐시에 현재 반복문의 요소가 있다면 splice로 해당 요소를 제거한다.
  - 현재 요소를 unshift한다.
  - answer의 길이가 캐시의 크기보다 크다면 pop한다.
*/

function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    const task = arr[i];
    const cachedTaskIndex = answer.indexOf(task);

    if (cachedTaskIndex !== -1) {
      answer.splice(cachedTaskIndex, 1);
    }

    answer.unshift(task);

    if (answer.length > size) {
      answer.pop();
    }
  }

  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr)); // [7, 5, 3, 2, 6]
