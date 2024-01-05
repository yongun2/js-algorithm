function solution(name, yearning, photo) {
	var answer = [];

	let lookup = {};

	for (let i = 0; i < name.length; ++i) {
		lookup[name[i]] = yearning[i];
	}

	photo.forEach((list) => {
		let count = 0;
		list.forEach((name) => {
			if (lookup[name]) count += lookup[name];
		});
		answer.push(count);
	});
	return answer;
}
