var score = require('./scrabble-score');

describe('Scrabble', function () {
  it('scores an empty word as zero', function () {
    expect(score('')).toEqual(0);
  });

  it('scores a null as zero', function () {
    expect(score(null)).toEqual(0);
  });

  it('scores a very short word', function () {
    expect(score('a')).toEqual(1);
  });

  it('scores the word by the number of letters', function () {
    expect(score('street')).toEqual(6);
  });

  it('scores more complicated words with more', function () {
    expect(score('quirky')).toEqual(22);
  });

  it('scores case insensitive words', function () {
    expect(score('OXYPHENBUTAZONE')).toEqual(41);
  });

  it('scores a double word', function () {
    expect(score('cabbage', 2)).toEqual(28);
  })

  it('scores a triple word', function () {
    expect(score('cabbage', 3)).toEqual(42);
  })

  it('scores with a double letter space', function () {
    expect(score('Snar2kface')).toEqual(23);
  })

  it('scores with a triple letter space', function () {
    expect(score('bu3bbles')).toEqual(19);
  })

  it('scores with a combination of double and triple letters and words', function () {
    expect(score('3Wend2igo', 2, 3)).toEqual(105);
  })

  it('throws an error if a number is used as the last character of a sequence', function () {
    expect(function(){score('blimpies2')}).toThrow(new Error());
  })

  it('throws an error with weird input', function () {
    expect(function(){score([1,2,3])}).toThrow(new Error());
  })

});
