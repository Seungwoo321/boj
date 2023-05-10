const readline = require('readline');
const isVowel = (word) => !!word.match(/[aeiou]/g);
const isContinuous = (word) => word.match(/[aeiou]{3}/g) || word.match(/[^aeiou]{3}/g);
const isSame = (word) => {
    let prev = '';
    for (let i = 0; i < word.length; i++) {
        if (prev !== 'e' && prev !== 'o' && prev === word[i]) {
            return true
        }
        prev = word[i];
    }
    return false;
}
(async () => {
    const rl = readline.createInterface({ input: process.stdin });
    for await (const line of rl) {
        if (line === 'end') {
            rl.close()
        } else if (!isVowel(line) || isContinuous(line) || isSame(line)) {
            console.log(`<${line}> is not acceptable.`)
        } else {
            console.log(`<${line}> is acceptable.`)
        }
    }
    process.exit();
})();
