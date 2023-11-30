function countDown(num) {
  if (num <= 0) {
    console.log("All Done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// countDown(5);

function factorialFor(num) {
  let result = 1;
  for (let i = num; i > 1; --i) {
    result *= i;
  }
  return result;
}

function factorialRecursion(num) {
  if (num === 1) return 1;
  return num * factorialRecursion(num - 1);
}

console.log(factorialFor(5));
console.log(factorialRecursion(5));
