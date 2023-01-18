const calculateDivisors = require('../calculate-divisors');

describe('calculateDivisors()', () => {
    test('1', () => {
        const input = 1;

        const output = calculateDivisors(input);

        const expected = 0;
        expect(output).toBe(expected);
    });

    test('5', () => {
        const input = 5;

        const output = calculateDivisors(input);

        const expected = 3;
        expect(output).toBe(expected);
    });

    test('6', () => {
        const input = 6;

        const output = calculateDivisors(input);

        const expected = 8;
        expect(output).toBe(expected);
    });

    test('10', () => {
        const input = 10;

        const output = calculateDivisors(input);

        const expected = 23;
        expect(output).toBe(expected);
    });

    test('12', () => {
        const input = 12;

        const output = calculateDivisors(input);

        const expected = 33;
        expect(output).toBe(expected);
    });
});
