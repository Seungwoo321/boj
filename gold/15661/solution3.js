const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution (n, arr) {
    const calculateScore = (team) => {
        let score = 0;
        for (let i = 0; i < team.length; i ++) {
            for (let j = 0; j < team.length; j ++) {
                score += arr[team[i]][team[j]];
            }
        }
        return score;
    }
    const divideTeam = (member, startTeam, linkTeam, result) => {
        if (member > n - 1) {
            if (!startTeam.length || !linkTeam.length) return;
            result.push([Math.abs(calculateScore(startTeam) - calculateScore(linkTeam))]);
            return;
        }
        startTeam.push(member);
        divideTeam(member + 1, startTeam, linkTeam, result);
        startTeam.pop();

        linkTeam.push(member);
        divideTeam(member + 1, startTeam, linkTeam, result);
        linkTeam.pop();
    }
    const result = [];
    divideTeam(0, [], [], result);
    return Math.min.apply(null, result);
}

console.log(solution(+n, arr.map(r => r.split(' ').map(Number))));

function run (input) {
    const [n, ...arr] = input
        .toString()
        .trim()
        .split('\n')
        .map(r => r.trim())
    return solution(+n, arr.map(r => r.split(' ').map(Number)))
}

module.exports = {
    run
}