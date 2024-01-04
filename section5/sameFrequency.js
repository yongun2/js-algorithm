function sameFrequency(a, b) {
  let lookUp = {};

  const stringA = "" + a;
  const stringB = "" + b;

  if (stringA.length !== stringB.length) return false;

  for (const char of stringA) {
    lookUp[char] = (lookUp[char] || 0) + 1;
  }

  for (const char of stringB) {
    if (!(char in lookUp)) return false;

    if (lookUp[char] === 0) return false;
    lookUp[char] -= 1;
  }

  return true;
}

const a = 34;
const b = 14;

console.log(sameFrequency(a, b));
