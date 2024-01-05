function solution(players, callings) {
	var answer = [];

	let playerLookup = {};
	let rankLookup = {};

	for (let i = 0; i < players.length; ++i) {
		rankLookup[i + 1] = players[i];
		playerLookup[players[i]] = i + 1;
	}

	callings.forEach((callee) => {
		const calleeRank = playerLookup[callee];
		const targetName = rankLookup[calleeRank - 1];
		const targetRank = playerLookup[targetName];

		rankLookup[targetRank] = callee;
		rankLookup[calleeRank] = targetName;

		playerLookup[callee] = targetRank;
		playerLookup[targetName] = calleeRank;
	});

	for (let i = 0; i < players.length; ++i) {
		answer.push(rankLookup[i + 1]);
	}

	return answer;
}

const players = ['mumu', 'soe', 'poe', 'kai', 'mine'];
const callings = ['kai', 'kai', 'mine', 'mine'];

solution(players, callings);
