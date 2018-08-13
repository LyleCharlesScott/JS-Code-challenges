import score from './scrabble-score';

describe('Scrabble', () => {

  test('lowercase letter', () => {
    expect(score('a')).toEqual(1)
  });

  test('uppercase letter', () => {
    expect(score('A')).toEqual(1)
  });

  test('valuable letter', () => {
    expect(score('f')).toEqual(4)
  });

  test('short word', () => {
    expect(score('at')).toEqual(2)
  });

  test('short, valuable word', () => {
    expect(score('zoo')).toEqual(12)
  });

  test('medium word', () => {
    expect(score('street')).toEqual(6)
  });

  test('medium, valuable word', () => {
    expect(score('quirky')).toEqual(22)
  });

  test('long, mixed-case word', () => {
    expect(score('OxyphenButazone')).toEqual(41)
  });

  test('english-like word', () => {
    expect(score('pinata')).toEqual(8)
  });

  test('empty input', () => {
    expect(score('')).toEqual(0)
  });

  test('entire alphabet available', () => {
    expect(score('abcdefghijklmnopqrstuvwxyz')).toEqual(87)
  });

  test('scores a double word', function () {
    expect(score('cabbage', 2)).toEqual(28);
  })

  test('scores a triple word', function () {
    expect(score('cabbage', 3)).toEqual(42);
  })

  test('scores with a double letter space', function () {
    expect(score('Snar2kface')).toEqual(23);
  })

  test('scores with a triple letter space', function () {
    expect(score('bu3bbles')).toEqual(19);
  })

  test('scores with a combination of double and triple letters and words', function () {
    expect(score('3Wend2igo', 2, 3)).toEqual(105);
  })

  test('throws an error if a number is used as the last character of a sequence', function () {
    expect(function(){score('blimpies2')}).toThrow(new Error());
  })

  test('throws an error if two digits are together', function () {
    expect(function(){score('blim23pies')}).toThrow(new Error());
  })

  test('throws an error on all digits', function () {
    expect(function(){score('12345')}).toThrow(new Error());
  })

  test('throws an error on single digit', function () {
    expect(function(){score('5')}).toThrow(new Error());
  })

  test('throws an error with weird input', function () {
    expect(function(){score([1,2,3])}).toThrow(new Error());
  })

  test('throws an error with weirder input', function () {
    expect(function(){score('1,2,3,')}).toThrow(new Error());
  })

  test('ignores bad doubles and triples', function () {
    expect(score('3Wend2igo', "F", [])).toEqual(21);
  })
});
