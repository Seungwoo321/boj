const { solution } = require('../gold/14500/solution');

describe('14500 테트로미노 (골드4)', () => {

    test('test 1', () => {
        expect(solution(5, 5, [
            [1, 2, 3, 4, 5],
            [5, 4, 3, 2, 1],
            [2, 3, 4, 5, 6],
            [6, 5, 4, 3, 2],
            [1, 2, 1, 2, 1]
        ]).toString()).toEqual('19');
    });

    test('test 2', () => {
        expect(solution(4, 5, [
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5]
        ]).toString()).toEqual('20');
    });

    test('test 3', () => {
        expect(solution(4, 10, [
            [1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
            [2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
            [1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
            [2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
        ]).toString()).toEqual('7');
    });
});