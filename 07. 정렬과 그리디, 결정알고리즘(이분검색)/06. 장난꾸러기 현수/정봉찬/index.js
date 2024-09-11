/*
✅문제 제목: 장난꾸러기 현수

✅문제 유형: 정렬

✅문제 풀이 날짜: 2024-08-15

💡문제 분석 요약
  - 키가 작은 학생부터 오름차순으로 정렬되어 있다.
  - 현수는 짝꿍보다 키가 크다.
  - 현수는 앞 번호를 받고 싶어서 짝꿍과 자리를 바꿨다.

💡알고리즘 설계
  - findIndex로 i가 i + 1보다 크거나 같은 경우의 인덱스를 구한다. 해당 인덱스 + 1을 answer에 push한다.
  - findLastIndex로 i가 i - 1보다 크거나 같은 경우의 인덱스를 구한다. 해당 인덱스의 + 1을 answer에 push한다.
*/

function solution(arr) {
  let answer = [];

  answer.push(arr.findIndex((element, index) => element >= arr[index + 1]) + 1);
  answer.push(
    arr.findLastIndex((element, index) => element >= arr[index - 1] + 1)
  );

  return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr)); // [3, 8]
let arr2 = [120, 130, 150, 150, 130, 150];
console.log(solution(arr2)); // [3, 5]
