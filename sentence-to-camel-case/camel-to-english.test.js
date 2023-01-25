const camelToEnglish = require('./camel-to-english');

describe('', () => {
    test('upper camelcase', () => {
        const input = 'ThisBiggerUpperSentence';

        const output = camelToEnglish(input, true);

        const expected = 'This bigger upper sentence.';
        expect(output).toBe(expected);
    });

    test('lower camelcase', () => {
        const input = 'thisBiggerLowerSentence';

        const output = camelToEnglish(input, false);

        const expected = 'This bigger lower sentence.';
        expect(output).toBe(expected);
    });

    test('consecutive caps; upper cases in the middle of words', () => {
        const input = 'ILikeSQL';

        const output = camelToEnglish(input, false);

        const expected = 'I like s q l.';
        expect(output).toBe(expected);
    });
});
