function recursiveRange(range) {
  if (range === 1) return 1;
  return range + recursiveRange(range - 1);
}

console.log(recursiveRange(10));
