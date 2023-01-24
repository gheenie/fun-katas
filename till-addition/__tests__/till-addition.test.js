const tillAddition = require('../till-addition');

describe('', () => {
    test('pence only, same value', () => {
        const input = { "1p": 1, "2p": 1 };

        const output = tillAddition(input);

        const expected = '£0.03';
        expect(output).toBe(expected);
    });

    test('pence only, diff value', () => {
        const input = { "1p": 1, "2p": 1, "5p": 1, "10p": 3, "20p": 1 };

        const output = tillAddition(input);

        const expected = '£0.58';
        expect(output).toBe(expected);
    });

    test('pence and £, diff value', () => {
        const input = { "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 3, "£50": 2 };

        const output = tillAddition(input);

        const expected = '£103.85';
        expect(output).toBe(expected);
    });
});
