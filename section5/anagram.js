function solution(a, b) {
  let validationDict = {};
  if (a.length !== b.length) return false;

  for (const char of a) {
    validationDict[char] = (validationDict[char] || 0) + 1;
  }

  for (const char of b) {
    if (!char in validationDict) return false;
    validationDict[char] -= 1;
  }

  for (const char in validationDict) {
    if (validationDict[char] !== 0) return false;
  }

  return true;
}

const a = "";
const b = "";

console.log(solution(a, b));
