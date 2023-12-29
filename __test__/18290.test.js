const { run } = require('../silver/18290/solution');

describe('NM과 K (1) (실버1)', () => {
    test('test 1', () => {
        expect(run(`
            1 1 1
            1
        `)
        ).toEqual(1);
    })

    test('test 2', () => {
        expect(run(`
            2 2 2
            1 2
            3 4
        `)
        ).toEqual(5);
    })
    test('test 3', () => {
        expect(run(`
            2 2 2
            5 4
            4 5
        `)
        ).toEqual(10);
    })
    test('test 4', () => {
        expect(run(`
            5 5 3
            1 9 8 -2 0
            -1 9 8 -3 0
            -5 1 9 -1 0
            0 0 0 9 8
            9 9 9 0 0
        `)
        ).toEqual(27);
    })
    test('test 5', () => {
        expect(run(`
            1 3 2
            2 1 4
        `)
        ).toEqual(6);
    })
    test('test 6', () => {
        expect(run(`
            2 3 3
            1 1 1
            1 1 1
        `)
        ).toEqual(3);
    })
    test('test 7', () => {
        expect(run(`
            2 3 1
            1 1 1
            1 1 1
        `)
        ).toEqual(1);
    })
    test('test 8', () => {
        expect(run(`
            2 3 1
            1 1 1
            1 6 1
        `)
        ).toEqual(6);
    })
    test('test 9', () => {
        expect(run(`
            2 3 3
            6 1 6
            1 6 1
        `)
        ).toEqual(18);
    })
    test('test 10', () => {
        expect(run(`
            2 3 3
            10000 10000 10000
            1 6 1
        `)
        ).toEqual(20006);
    })
    test('test 11', () => {
        expect(run(`
            2 3 3
            10000 10000 10000
            10000 10000 10000
        `)
        ).toEqual(30000);
    })
    test('test 12', () => {
        expect(run(`
            10000 10000 1
            10000 2 1
            10000 10000 10000
        `)
        ).toEqual(10000);
    })
    test('test 13', () => {
        expect(run(`
            3 3 2
            100 1000 1
            1000 2 1
            10000 10 10000
        `)
        ).toEqual(20000);
    })
    test('test 14', () => {
        expect(run(`
            3 3 4
            100 10 1
            1000 2 1
            10000 10 10000
        `)
        ).toEqual(20102);
    })
})