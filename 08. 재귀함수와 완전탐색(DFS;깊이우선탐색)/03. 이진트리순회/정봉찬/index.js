/*
✅문제 제목: 이진트리순회

✅문제 유형: DFS

✅문제 풀이 날짜: 2024-08-19

💡문제 분석 요약
  - 1 ─ 2 ─ 4
  -   │   └ 5
  -   └ 3 ─ 6
  -       └ 7
  - 전위순회와 후위순회를 연습하자.
  - 전위순회 출력: 1 2 4 5 3 6 7
  - 중위순회 출력: 4 2 5 1 6 3 7
  - 후위순회 출력: 4 5 2 6 7 3 1

💡알고리즘 설계
  - 

💡사전지식
  - 전위 순회(preorder): 현재 노드를 부모 노드로 생각했을 때 부모 노드 -> 왼쪽 자식 노드 -> 오른쪽 자식 노드 순서로 방문
  - 중위 순회(inorder): 현재 노드를 부모 노드로 생각했을 때 왼쪽 자식 노드 -> 부모 노드 -> 우른쪽 자식 노드 순서로 방문
  - 후위 순회(postorder): 현재 노드를 부모 노드로 생각했을 때 왼쪽 자식 노드 -> 오른쪽 자식 노드 -> 부모 노드 순서로 방문
*/

function solution(n) {
  let answer = '';

  // 전위 순회
  let preorderAnswer = '';
  function preorder(node) {
    if (node > 7) {
      return;
    }

    preorderAnswer += node + ' ';

    preorder(node * 2);
    preorder(node * 2 + 1);
  }
  preorder(n);

  // 후위 순회
  let postorderAnswer = '';
  function postorder(node) {
    if (node > 7) {
      return;
    }

    postorder(node * 2);
    postorder(node * 2 + 1);

    postorderAnswer += node + ' ';
  }
  postorder(n);

  // 중위 순회
  let inorderAnswer = '';
  function inorder(node) {
    if (node > 7) {
      return;
    }

    inorder(node * 2);
    inorderAnswer += node + ' ';
    inorder(node * 2 + 1);
  }
  inorder(n);

  answer = `
  전위순회: ${preorderAnswer}
  후위순회: ${postorderAnswer}
  중위순회: ${inorderAnswer}`;

  return answer;
}

console.log(solution(1));
