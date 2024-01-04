function areThereDuplicatesMultiplePointers(...args) {
  args.sort();

  let left = 0;
  let right = left + 1;

  while (right < args.length) {
    const leftValue = args[left];
    const rightValue = args[right];

    if (leftValue === rightValue) return true;

    left = right;
    right++;
  }

  return false;
}

function areThereDuplicatesFrequency(...args) {
  let lookUp = {};

  for (const item of args) {
    lookUp[item] = (lookUp[item] || 0) + 1;

    if (lookUp[item] > 1) return true;
  }

  return false;
}

console.log(areThereDuplicatesFrequency(1, 2, 3));
