const { solution2 } = require('../silver/15650/solution');

describe('15650 N과 M(2) (실버3)', () => {
    test('test 1', () => {
        expect(
            solution2(3, 1)
        ).toEqual([
            '1',
            '2',
            '3'
        ].join('\n'))
    })

    test('test 2', () => {
        expect(
            solution2(4, 2)
        ).toEqual([
            '1 2',
            '1 3',
            '1 4',
            '2 3',
            '2 4',
            '3 4'
        ].join('\n'))
    })

    test('test 3', () => {
        expect(
            solution2(4, 4)
        ).toEqual([
            '1 2 3 4'
        ].join('\n'))
    })
})