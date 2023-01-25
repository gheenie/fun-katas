const foldString = require('./fold-string');

describe('', () => {
    test('>= 4 letters; even length', () => {
        expect( foldString('code') ).toBe('oced');
        expect( foldString('abcdef') ).toBe('cbafed');
        expect( foldString('javascript') ).toBe('savajtpirc');
    });
    
    test('>= 4 letters; odd length', () => {
        expect( foldString('Northcoders') ).toBe('htroNcsredo');
    });

    test('< 4 letters', () => {
        expect( foldString('c') ).toBe('c');
        expect( foldString('co') ).toBe('co');
        expect( foldString('cod') ).toBe('cod');
    });

    test('mix of >= 4 and < 4 letters; has whitespaces', () => {
        const input = 'javascript is cool';

        const output = foldString(input);

        const expected = 'savajtpirc is oclo';
        expect(output).toBe(expected);
    });
});
