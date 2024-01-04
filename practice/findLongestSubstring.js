/**
문자열을 받아 모든 고유 문자가 포함된 가장 긴 하위 문자열의 길이를 반환하는 findLongestSubstring이라는 함수를 작성하세요.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
 */

function findLongestSubstring(str) {
	let answer = -Infinity;

	let lookup = {};
	let start = 0;

	for (let i = 0; i < str.length; ++i) {
		const char = str[i];

		if (lookup[char]) {
			start = Math.max(start, lookup[char]);
		}

		answer = Math.max(answer, i - start + 1);
		lookup[char] = i + 1;
	}
	console.log(lookup);
	return answer;
}
console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thisisawesome'));
