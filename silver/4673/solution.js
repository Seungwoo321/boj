
function solution () {
    const MAX_NUMBER = 10000;
    const d = (n) => n + (n % 10) + (parseInt(n / 10) % 10) + (parseInt(n / 100) % 10) + (parseInt(n / 1000) % 10);
    // const d = n => n.toString().split('').reduce((acc, cur) => acc + +cur, n);
    const answers = Array.from({ length: MAX_NUMBER + 1 }, (_, i) => i);
    for (let i = 1; i < MAX_NUMBER + 1; i ++) {
        const sn = d(i);
        if (sn <= MAX_NUMBER) {
            answers[sn] = 0;
        }
    }
    return answers.filter((v) => v).join('\n');
}
console.log(solution());