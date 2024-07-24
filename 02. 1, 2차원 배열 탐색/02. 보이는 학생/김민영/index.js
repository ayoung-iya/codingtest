function solution(arr) {
  let answer = 1;
  let currentMaxHeight = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currentMaxHeight) {
      answer += 1;
      currentMaxHeight = arr[i];
    }
  }

  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
