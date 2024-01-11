const { run } = require('../gold/15661/solution3');

describe('링크와 스타트 (골드5)', () => {
    test('test 1', () => {
        expect(run(`
            4
            0 1 2 3
            4 0 5 6
            7 1 0 2
            3 4 5 0
        `)
        ).toEqual(0);
    })

    test('test 2', () => {
        expect(run(`
            6
            0 1 2 3 4 5
            1 0 2 3 4 5
            1 2 0 3 4 5
            1 2 3 0 4 5
            1 2 3 4 0 5
            1 2 3 4 5 0
        `)
        ).toEqual(2);
    })
    test('test 3', () => {
        expect(run(`
            8
            0 5 4 5 4 5 4 5
            4 0 5 1 2 3 4 5
            9 8 0 1 2 3 1 2
            9 9 9 0 9 9 9 9
            1 1 1 1 0 1 1 1
            8 7 6 5 4 0 3 2
            9 1 9 1 9 1 0 9
            6 5 4 3 2 1 9 0
        `)
        ).toEqual(1);
    })
    test('test 4', () => {
        expect(run(`
            5
            0 3 1 1 1
            3 0 1 1 1
            1 1 0 1 1
            1 1 1 0 1
            1 1 1 1 0
        `)
        ).toEqual(0);
    })
})