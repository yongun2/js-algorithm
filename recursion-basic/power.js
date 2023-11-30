function power(base, exponent) {
  let result = 1;

  function multiply(current) {
    if (current > exponent) return;
    result *= base;
    multiply(current + 1);
  }
  multiply(1);

  return result;
}

console.log(power(2, 4));
