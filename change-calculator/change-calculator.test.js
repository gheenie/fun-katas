const changeCalculator = require('./change-calculator');

describe('', () => {
    test('return value beginning denomination is 1', () => {
        const input = 1;

        const output = changeCalculator(input);

        const expected = {'1':1};
        expect(output).toEqual(expected);
    });

    test('return value beginning denomination is 2', () => {
        const input = 2;

        const output = changeCalculator(input);

        const expected = {'2':1};
        expect(output).toEqual(expected);
    });

    test('return value beginning denomination is 5; multiple denominations', () => {
        const input = 7;

        const output = changeCalculator(input);

        const expected = { '5': 1, '2': 1 };
        expect(output).toEqual(expected);
    });

    test('return value beginning denomination is 10; multiple denominations', () => {
        const input = 18;

        const output = changeCalculator(input);

        const expected = { '10': 1, '5': 1, '2': 1, '1': 1 };
        expect(output).toEqual(expected);
    });

    test('return value beginning denomination is 50; multiple denominations; multiple counts', () => {
        const input = 148;

        const output = changeCalculator(input);

        const expected = { '50': 2, '20': 2, '5': 1, '2': 1, '1': 1 };
        expect(output).toEqual(expected);
    });
});
