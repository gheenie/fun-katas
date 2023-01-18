const dnaPairs = require('../dna-pairs.js');

describe('dnaPairs()', () => {
  test('empty string', () => {
    // add your test assertion(s) here
    const input = '';

    const output = dnaPairs(input);

    const expected = [];
    expect(output).toEqual(expected);
  });

  test('one base', () => {
    // add your test assertion(s) here
    const input = 'G';

    const output = dnaPairs(input);

    const expected = [['G', 'C']];
    expect(output).toEqual(expected);
  });

  test('four different bases', () => {
    // add your test assertion(s) here
    const input = 'ATCG';

    const output = dnaPairs(input);

    const expected = [['A', 'T'], ['T', 'A'], ['C', 'G'], ['G', 'C']];
    expect(output).toEqual(expected);
  });
});
