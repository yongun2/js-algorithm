function solution(a, b) {
  let answer = true;
  let resultMap = {};

  a.forEach((item) => {
    if (!resultMap.hasOwnProperty(item * item)) {
      resultMap[item * item] = 1;
    } else {
      resultMap[item * item] += 1;
    }
  });

  b.forEach((item) => {
    if (resultMap.hasOwnProperty(item)) {
      resultMap[item] -= 1;
    }
  });

  Object.values(resultMap).forEach((item) => {
    if (item !== 0) answer = false;
  });

  return answer;
}

const a = [1, 2, 3];
const b = [1, 9];

console.log(solution(a, b));

let test_dict = {};

console.log(test_dict["hello"] || 0 + 1);
