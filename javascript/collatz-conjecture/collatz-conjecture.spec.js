var CollatzConjecture = require('./collatz-conjecture');

describe('CollatzConjecture', function () {
  var collatz = new CollatzConjecture();

  it('test zero steps for one', function () {
    var expected = 0;
    expect(collatz.steps(1)).toEqual(expected);
  });

  it('test divide if even steps', function () {
    var expected = 4;
    expect(collatz.steps(16)).toEqual(expected);
  });

  it('test even and odd steps', function () {
    var expected = 9;
    expect(collatz.steps(12)).toEqual(expected);
  });

  it('test large number of even and odd steps', function () {
    var expected = 152;
    expect(collatz.steps(1000000)).toEqual(expected);
  });

  it('tests other values', function () {
    var expected = 153;
    expect(collatz.steps(2000000)).toEqual(expected);
  })

  it('tests still more values', function () {
    var expected = 283;
    expect(collatz.steps(149450934809)).toEqual(expected);
  })

  it('tests still more values 2', function () {
    var expected = 271;
    expect(collatz.steps(14945093452353809)).toEqual(expected);
  })

  it('tests still more values 3', function () {
    var expected = 113;
    expect(collatz.steps(1000001)).toEqual(expected);
  })

  it('tests still more values 4', function () {
    var expected = 113;
    expect(collatz.steps(1000002)).toEqual(expected);
  })

  it('tests still more values 5', function () {
    var expected = 113;
    expect(collatz.steps(1000003)).toEqual(expected);
  })

  it('tests still more values 6', function () {
    var expected = 113;
    expect(collatz.steps(1000004)).toEqual(expected);
  })

  it('tests still more values 7', function () {
    var expected = 113;
    expect(collatz.steps(1000005)).toEqual(expected);
  })

  it('tests still more values 8', function () {
    var expected = 113;
    expect(collatz.steps(1000006)).toEqual(expected);
  })

  it('tests still more values 9', function () {
    var expected = 258;
    expect(collatz.steps(1000007)).toEqual(expected);
  })

  it('test zero is an error', function () {
    expect(function () {
      collatz.steps(0);
    }).toThrow(new Error('Only positive numbers are allowed'));
  });

  it('test negative value is an error', function () {
    expect(function () {
      collatz.steps(-1);
    }).toThrow(new Error('Only positive numbers are allowed'));
  });

});
