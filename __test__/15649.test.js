const { solution } = require('../silver/15649/solution');

describe('15649 N과 M(1) (실버3)', () => {
    test('test 1', () => {
        expect(
            solution(3, 1).toString()
        ).toEqual(['1', '2', '3'].join('\n'));
    });

    test('test 2', () => {
        expect(
            solution(4, 2).toString()
        ).toEqual([
            '1 2',
            '1 3',
            '1 4',
            '2 1',
            '2 3',
            '2 4',
            '3 1',
            '3 2',
            '3 4',
            '4 1',
            '4 2',
            '4 3'
        ].join('\n'));
    });

    test('test 3', () => {
        expect(
            solution(4, 4).toString()
        ).toEqual([
            '1 2 3 4',
            '1 2 4 3',
            '1 3 2 4',
            '1 3 4 2',
            '1 4 2 3',
            '1 4 3 2',
            '2 1 3 4',
            '2 1 4 3',
            '2 3 1 4',
            '2 3 4 1',
            '2 4 1 3',
            '2 4 3 1',
            '3 1 2 4',
            '3 1 4 2',
            '3 2 1 4',
            '3 2 4 1',
            '3 4 1 2',
            '3 4 2 1',
            '4 1 2 3',
            '4 1 3 2',
            '4 2 1 3',
            '4 2 3 1',
            '4 3 1 2',
            '4 3 2 1'
        ].join('\n'));
    });
});