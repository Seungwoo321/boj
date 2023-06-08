const fn = require('../2670/');

describe('2670 연속부분 최대곱(실버4)', () => {
    test('test 1', () => {
        expect(fn(
            3,
            [
                0.9,
                0.9,
                1.0
            ]).toString()).toEqual('1.000')
    });

    test('test 2', () => {
        expect(fn(
            8,
            [
                1.1,
                0.7,
                1.3,
                0.9,
                1.4,
                0.8,
                0.7,
                1.4
            ]).toString()).toBe('1.638')
    });

    test('test 3', () => {
        expect(fn(
            5,
            [
                2.0,
                2.0,
                2.0,
                2.0,
                2.0
            ]).toString()).toBe('32.000')
    });
});