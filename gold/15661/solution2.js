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
    let powerBalance = Infinity;
    for (let i = 0; i < (1 << n - 1); i ++) {
        const startTeam = [];
        const linkTeam = []; 
        for (let j = 0; j < n; j ++) {
            if (i & (1 << j)) {
                startTeam.push(j);
            } else {
                linkTeam.push(j);
            }
        }
        powerBalance = Math.min(powerBalance, Math.abs(calculateScore(startTeam) - calculateScore(linkTeam)));
    }
    return powerBalance;
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