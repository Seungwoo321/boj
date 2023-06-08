const { solution } = require('../1107/solution');

describe('1107 리모컨(골드5)', () => {
    test('test 1', () => {
        expect(solution(
            5457,
            3,
            [6, 7, 8]
        ).toString()).toEqual('6')
    });

    test('test 2', () => {
        expect(solution(
            100,
            5,
            [0, 1, 2, 3, 4]
        ).toString()).toEqual('0')
    });

    test('test 3', () => {
        expect(solution(
            500000,
            8,
            [0, 2, 3, 4, 6, 7, 8, 9]
        ).toString()).toEqual('11117')
    });

    test('test 4', () => {
        expect(solution(
            100,
            3,
            [1, 0, 5]
        ).toString()).toEqual('0')
    });

    test('test 5', () => {
        expect(solution(
            14124,
            0
        ).toString()).toEqual('5')
    });

    test('test 6', () => {
        expect(solution(
            1,
            9,
            [1, 2, 3, 4, 5, 6, 7, 8, 9]
        ).toString()).toEqual('2')
    });

    test('test 7', () => {
        expect(solution(
            80000,
            2,
            [8, 9]
        ).toString()).toEqual('2228')
    });

    test('test 8', () => {
        expect(solution(
            1000,
            10,
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        ).toString()).toEqual('900')
    })
})