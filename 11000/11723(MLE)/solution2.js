const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let mask = 0;
const answer = [];
rl.on("line", (line) => {
    const [cmd, x] = line.trim().split(' ');
    if (cmd === 'add') mask |= (1 << x);
    else if (cmd === 'remove') mask &= ~(1 << x);
    else if (cmd === 'check') answer.push(mask & (1 << x) ? 1 : 0);
    else if (cmd === 'toggle') mask ^= (1 << x);
    else if (cmd === 'all') mask = (1 << 21) - 1;
    else mask = 0;
});
rl.on("close", () => console.log(answer.join('\n')) && process.exit());
