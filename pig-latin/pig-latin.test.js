const pigLatin = require('./pig-latin');

describe('', () => {
    test('empty string', () => {
        const input = '';

        const output = pigLatin(input);

        const expected = '';

        expect(output).toBe(expected);
    });

    test('1 consonant', () => {
        const input = 'northcoders';

        const output = pigLatin(input);

        const expected = 'orthcodersnay';
        
        expect(output).toBe(expected);
    });

    test('1 consonant; capitalised', () => {
        const input = 'Northcoders';

        const output = pigLatin(input);

        const expected = 'orthcodersNay';
        
        expect(output).toBe(expected);
    });

    test('>1 consonant', () => {
        const input = 'sheffield';

        const output = pigLatin(input);

        const expected = 'effieldshay';
        
        expect(output).toBe(expected);
    });

    test('vowel', () => {
        const input = 'algorithm';

        const output = pigLatin(input);

        const expected = 'algorithmway';
        
        expect(output).toBe(expected);
    });

    test('vowel; capitalised', () => {
        const input = 'Algorithm';

        const output = pigLatin(input);

        const expected = 'Algorithmway';
        
        expect(output).toBe(expected);
    });

    test('multiple words', () => {
        const input = 'keep on coding';

        const output = pigLatin(input);

        const expected = 'eepkay onway odingcay';
        
        expect(output).toBe(expected);
    });
});
