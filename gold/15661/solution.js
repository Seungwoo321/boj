const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution (n, arr) {

    const score = (startTeam, linkTeam) => {
        let [startScore, linkScore] = [0, 0];
        for (let i = 0; i < n; i ++) {
            for (let j = 0; j < n; j ++) {
                startScore += +arr[startTeam[i]]?.[startTeam[j]] || 0;
                linkScore += +arr[linkTeam[i]]?.[linkTeam[j]] || 0;
            }
        }
        return Math.abs(startScore - linkScore);
    }

    const divideTeam = (member, startTeam, linkTeam, result) => {
        if (member > n) {
            if (!startTeam.length || !linkTeam.length) return;
            result.push([[...startTeam], [...linkTeam]])
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

    let powerBalance = Infinity
    for (let i = 0; i < result.length; i ++) {
        const [start, link] = result[i];
        powerBalance = Math.min(powerBalance, score(start, link))
    }
    return powerBalance;
}

console.log(solution(+n, arr.map(r => r.split(' ').map(Number))));