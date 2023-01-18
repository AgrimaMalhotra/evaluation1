function calculateScore(roundScore) {
    let index = 0;
    let eachRoundScore, totalScore = 0;
    while (index < 10) {
        eachRoundScore = roundScore[index].reduce((a, b) => a + b, 0);
        if (index == 9) {
            //10th round
            totalScore += eachRoundScore;
            break;
        }
        if (eachRoundScore < 10) {//open round
            totalScore += eachRoundScore;
        }
        else if (roundScore[index][1] === 10) {
            //spare
            totalScore += 10 + roundScore[index + 1][0];
        }
        else if (roundScore[index][0] == 10) {
            //strike
            totalScore += 10 + roundScore[index][1] + roundScore[index + 1][0];
        }
        index += 1;

    }
    return totalScore;

}

function score(rolls) {
    let roundScore = {};
    for (let index = 0; index < rolls.length; index += 2) {
        if (index == 18) {
            roundScore[parseInt(index / 2)] = rolls.slice(index,);
            break;
        }
        roundScore[parseInt(index / 2)] = rolls.slice(index, index + 2);
    }

    return calculateScore(roundScore);

}
function bestScore(games) {
    let max = 0;
    for (let index = 0; index < games.length - 1; index++) {
        max = Math.max(score(games[index], games[index + 1]));
    }
    return max;
}

var rolls = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
console.log(score(rolls));

var games = [[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]];
console.log(bestScore(games));

module.exports