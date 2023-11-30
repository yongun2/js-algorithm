function productOfArray(array) {
  let result = 1;

  function helper(helperInput) {
    if (helperInput.length === 0) return;
    result *= helperInput[0];
    helper(helperInput.slice(1));
  }

  helper(array);
  return result;
}

console.log(productOfArray([1, 2, 3, 10]));
