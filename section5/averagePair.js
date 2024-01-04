function averagePair(array, average) {
  if (array.length === 0) return false;

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const leftValue = array[left];
    const rightValue = array[right];

    const currentAverage = (leftValue + rightValue) / 2;

    if (currentAverage === average) return true;
    else if (currentAverage > average) right--;
    else left++;
  }

  return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
