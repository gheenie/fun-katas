const sentenceToCamelCase = require('./sentence-to-camel-case');

describe('', () => {
    test('upper camelcase', () => {
        const input = 'this sentence';

        const output = sentenceToCamelCase(input, true);

        const expected = 'ThisSentence';
        expect(output).toBe(expected);
    });

    test('lower camelcase', () => {
        const input = 'this sentence';

        const output = sentenceToCamelCase(input, false);

        const expected = 'thisSentence';
        expect(output).toBe(expected);
    });

    test('longer sentence', () => {
        const input = 'This Bigger strange Sentence';

        const output = sentenceToCamelCase(input, true);

        const expected = 'ThisBiggerStrangeSentence';
        expect(output).toBe(expected);
    });

    test('upper cases in the middle of words', () => {
        const input = 'This BiGger strAnge Sentence';

        const output = sentenceToCamelCase(input, false);

        const expected = 'thisBiggerStrangeSentence';
        expect(output).toBe(expected);
    });
});
