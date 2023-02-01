const rotateArray = require('./rotate-array');

describe('', () => {
    test('num 0; diff memory refs', () => {
        const input = [1, 2, 3];
        const input2 = 0;

        const output = rotateArray(input, input2);

        const expected = [1, 2, 3];

        expect(output).toEqual(expected);
        expect(output).not.toBe(input);
    });

    test('num >0', () => {
        let input = [1, 2, 3];
        let input2 = 1;

        let output = rotateArray(input, input2);

        let expected = [3, 1, 2];

        expect(output).toEqual(expected);
        expect(output).not.toBe(input);
    });

    test('num >0; longer arr, higher num', () => {
        let input = [1, 2, 3, 4, 5];
        let input2 = 3;

        let output = rotateArray(input, input2);

        let expected = [3, 4, 5, 1, 2];

        expect(output).toEqual(expected);
        expect(output).not.toBe(input);
    });

    test('num <0', () => {
        const input = [1, 2, 3];
        const input2 = -1;

        const output = rotateArray(input, input2);

        const expected = [2, 3, 1];

        expect(output).toEqual(expected);
        expect(output).not.toBe(input);
    });
});
