const { run } = require('../gold/1759/solution');

describe('1759 암호 만들기 (골드5)', () => {
    test('test 1', () => {
        expect(run(`
            4 6
            a t c i s w
        `)).toEqual(
            `acis
            acit
            aciw
            acst
            acsw
            actw
            aist
            aisw
            aitw
            astw
            cist
            cisw
            citw
            istw`
        .split('\n').map(s => s.trim()).join('\n'));
    });
});