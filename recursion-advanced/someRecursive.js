function someRecursive(array, callback) {
  if (array.length === 1) return callback(array[0]);
  return someRecursive(array.slice(1), callback) || callback(array[0]);
}
