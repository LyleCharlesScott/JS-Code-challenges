var Triangle = require('./triangle');

describe('Triangle', function () {
  it('equilateral triangles have equal sides', function () {
    var triangle = new Triangle(2, 2, 2);
    expect(triangle.kind()).toEqual('equilateral');
  });

  it('larger equilateral triangles also have equal sides', function () {
    var triangle = new Triangle(10, 10, 10);
    expect(triangle.kind()).toEqual('equilateral');
  });

  it('isosceles triangles have last two sides equal', function () {
    var triangle = new Triangle(3, 4, 4);
    expect(triangle.kind()).toEqual('isosceles');
  });

  it('isosceles triangles have first two sides equal', function () {
    var triangle = new Triangle(2, 2, 3);
    expect(triangle.kind()).toEqual('isosceles');
  });

  it('isosceles trianges have first and last sides equal', function () {
    var triangle = new Triangle(4, 3, 4);
    expect(triangle.kind()).toEqual('isosceles');
  });

  it('isosceles triangles have two first sides equal', function () {
    var triangle = new Triangle('4', 4, 3);
    expect(triangle.kind()).toEqual('isosceles');
  });

  it('isosceles triangles have in fact exactly two sides equal', function () {
    var triangle = new Triangle(10, 10, 2);
    expect(triangle.kind()).toEqual('isosceles');
  });

  it('scalene triangles have no equal sides', function () {
    var triangle = new Triangle(3, 4, 5);
    expect(triangle.kind()).toEqual('scalene');
  });

  it('scalene triangles have no equal sides at a larger scale too', function () {
    var triangle = new Triangle(10, 11, 12);
    expect(triangle.kind()).toEqual('scalene');
  });

  it('scalene triangles have no equal sides in descending order either', function () {
    var triangle = new Triangle(5, 4, 2);
    expect(triangle.kind()).toEqual('scalene');
  });

  it('very small triangles are legal', function () {
    var triangle = new Triangle(0.4, 0.6, 0.3);
    expect(triangle.kind()).toEqual('scalene');
  });

  it('test triangles with no size are illegal', function () {
    var triangle = new Triangle(0, 0, 0);
    expect(triangle.kind.bind(triangle)).toThrow();
  });

  it('triangles with negative sides are illegal', function () {
    var triangle = new Triangle(3, 4, -5);
    expect(triangle.kind.bind(triangle)).toThrow();
  });

  it('triangles violating triangle inequality are illegal', function () {
    var triangle = new Triangle(1, 1, 3);
    expect(triangle.kind.bind(triangle)).toThrow();
  });

  it('triangles violating triangle inequality are illegal 2', function () {
    var triangle = new Triangle(7, 3, 2);
    expect(triangle.kind.bind(triangle)).toThrow();
  });

  it('triangles violating triangle inequality are illegal 3', function () {
    var triangle = new Triangle(10, 1, 3);
    expect(triangle.kind.bind(triangle)).toThrow();
  });

  it('degenerate scalene triangles have two sides that add up to the size of the third', function () {
    var triangle = new Triangle(10, 4, 6);
    expect(triangle.kind()).toEqual('degenerate scalene');
  });

  it('degenerate isosceles triangles have two sides that add up to the size of the third', function () {
    var triangle = new Triangle(30, 15, 15);
    expect(triangle.kind()).toEqual('degenerate isosceles');
  });

  it('rejects invalid data on input', function () {
    expect(function () {
      var triangle = new Triangle(2, 5, "G");
    }).toThrow();
  });

  it('tests true equilateral directly', function () {
    var triangle = new Triangle(7, 7, 7);
    expect(triangle.isEquilateral()).toEqual(true);
  });

  it('tests false equilateral directly', function () {
    var triangle = new Triangle(10, 7, 7);
    expect(triangle.isEquilateral()).toEqual(false);
  });

  it('tests true isosceles directly', function () {
    var triangle = new Triangle(3, 7, 7);
    expect(triangle.isIsosceles()).toEqual(true);
  });

  it('verifies that an equilateral triangle is isosceles', function () {
    var triangle = new Triangle(9, 9, 9);
    expect(triangle.isIsosceles()).toEqual(true);
  });

  it('tests false isosceles directly', function () {
    var triangle = new Triangle(10, 5, 7);
    expect(triangle.isIsosceles()).toEqual(false);
  });

  it('tests true scalene directly', function () {
    var triangle = new Triangle(3, 4, 5);
    expect(triangle.isScalene()).toEqual(true);
  });

  it('tests false scalene directly', function () {
    var triangle = new Triangle(10, 10, 15);
    expect(triangle.isScalene()).toEqual(false);
  });

  it('tests an isosceles degenerate directly', function () {
    var triangle = new Triangle(10, 20, 10);
    expect(triangle.isDegenerate()).toEqual(true);
  });

  it('tests a scalene degenerate directly', function () {
    var triangle = new Triangle(11, 20, 9);
    expect(triangle.isDegenerate()).toEqual(true);
  });

  it('tests false degenerate directly', function () {
    var triangle = new Triangle(10, 20, 11);
    expect(triangle.isDegenerate()).toEqual(false);
  });
});
