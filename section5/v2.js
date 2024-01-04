function countUniqueValues(array) {
  let answer = 1;

  // 빈 배열일 경우 0 return
  if (array.length === 0) return 0;

  let left = 0;
  let right = left + 1;
  while (right < array.length) {
    let leftValue = array[left];
    let rightValue = array[right];

    if (rightValue !== leftValue) {
      left = right;
      answer += 1;
    }

    right += 1;
  }

  return answer;
}

// const array = [1, 1, 1, 1, 1, 2];
// const array = [-2, -1, -1, 0, 1];
const array = [1, 2, 1, 2, 3, 3, 4, 4, 5, 6];

console.log(countUniqueValues(array));
