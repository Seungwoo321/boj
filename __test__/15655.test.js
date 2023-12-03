const { solution } = require('../silver/15655/solution');

describe('15655 N과 M(6) (실버3)', () => {
    test('test 1', () => {
        expect(
            solution(3, 1, [4, 5, 2])
        ).toEqual([
            '2',
            '4',
            '5'
        ].join('\n'))
    })

    test('test 2', () => {
        expect(
            solution(4, 2, [9, 8, 7, 1])
        ).toEqual([
            '1 7',
            '1 8',
            '1 9',
            '7 8',
            '7 9',
            '8 9'
        ].join('\n'))
    })

    test('test 3', () => {
        expect(
            solution(4, 4, [1231, 1232, 1233, 1234])
        ).toEqual([
            '1231 1232 1233 1234',
        ].join('\n'))
    })
})