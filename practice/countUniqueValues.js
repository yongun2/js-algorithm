function countUniqueValue(array) {
  if (array.length === 0) return 0;

  let left = 0;
  let right = left + 1;
  let result = 1;
  while (right < array.length) {
    if (array[right] !== array[left]) {
      left = right;
      result += 1;
    }

    right += 1;
  }

  return result;
}

console.log(countUniqueValue([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValue([]));
