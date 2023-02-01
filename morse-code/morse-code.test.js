const morseCode = require('./morse-code');

describe('', () => {
    test('empty string', () => {
        const input = '';

        const output = morseCode(input);

        const expected = '';

        expect(output).toBe(expected);
    });

    test('1 word; 1 letter', () => {
        const input = '..-.';

        const output = morseCode(input);

        const expected = 'F';

        expect(output).toBe(expected);
    });

    test('1 word; >1 letter', () => {
        expect( morseCode('.... ..') ).toBe('HI');
        expect( morseCode('.... . .-.. .-.. ---') ).toBe('HELLO');
        expect( morseCode('-. --- .-. - .... -.-. --- -.. . .-. ...') ).toBe('NORTHCODERS');
    });

    test('>1 word; >1 letter', () => {
        const input = '--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ...';

        const output = morseCode(input);

        const expected = 'GOOD MORNING NORTHCODERS';

        expect(output).toBe(expected);
    });
});
