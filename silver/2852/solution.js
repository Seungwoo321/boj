const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
function solution (n, arr) {
    const record = (mm, ss, prev) => ((mm * 60) + ss) - prev;
    const convert = (unit) => `${(parseInt(unit)) <= 9 ? '0' : ''}${parseInt(unit)}`;
    const answer = [0, 0];
    let score = 0;
    let prevTime = 0;
    for (let i = 0; i < n; i ++) {
        const [team, time] = arr[i].split(' ');
        let [mm, ss] = time.split(':').map(v => v[0] === '0' ? +v[1] : +v);
        if (score > 0) answer[0] += record(mm, ss, prevTime);
        else if (score < 0) answer[1] += record(mm, ss, prevTime);
        score = team === '1' ? score + 1 : score - 1;
        prevTime = (mm * 60) + ss;
    }
    if (score > 0) answer[0] += record(48, 0, prevTime);
    else if (score < 0) answer[1] += record(48, 0, prevTime);
    return answer.map(t => `${convert(t / 60)}:${convert(t % 60)}`).join('\n');
}
console.log(solution(+n, arr))