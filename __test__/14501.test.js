const { run } = require('../silver/14501/solution');

describe('14501 퇴사 (실버3)', () => {
    test('test 1', () => {
        expect(
            run(`
7
3 10
5 20
1 10
1 20
2 15
4 40
2 200
            `)
        ).toEqual(45)
    });

    test('test 2', () => {
        expect(
            run(`
10
1 1
1 2
1 3
1 4
1 5
1 6
1 7
1 8
1 9
1 10
            `)
        ).toEqual(55)
    });

    test('test 3', () => {
        expect(
            run(`
10
5 10
5 9
5 8
5 7
5 6
5 10
5 9
5 8
5 7
5 6
            `)
        ).toEqual(20)
    });

    test('test 4', () => {
        expect(
            run(`
10
5 50
4 40
3 30
2 20
1 10
1 10
2 20
3 30
4 40
5 50
            `)
        ).toEqual(90)
    });
});