const herdTheBabies = require('./herd-the-babies');

describe('', () => {
    test('1 letter; upper and lower', () => {
        const input = 'aA';

        const output = herdTheBabies(input);

        const expected = 'Aa';

        expect(output).toBe(expected);
    });

    test('>1 letters; 1 upper and lower, 1 upper only', () => {
        const input = 'aBA';

        const output = herdTheBabies(input);

        const expected = 'AaB';

        expect(output).toBe(expected);
    });

    test('>1 letters; all upper and lower; multiples and not', () => {
        const input = 'bbaBccAC';

        const output = herdTheBabies(input);

        const expected = 'AaBbbCcc';

        expect(output).toBe(expected);
    });

    test('>1 letters; all upper and lower; all multiples', () => {
        const input = 'AaBbbBaAbAbbAbB';

        const output = herdTheBabies(input);

        const expected = 'AAAAaaBBBbbbbbb';

        expect(output).toBe(expected);
    });
});
