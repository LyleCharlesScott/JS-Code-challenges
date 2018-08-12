export default class Triangle {
  constructor(...sides) {
    this.sides = sides.map((side) => {
      if (isNaN(side)) throw new Error();
      return parseFloat(side, 10);
    });
    this.bigliestSide = Math.max(...this.sides);
    this.teensiestSide = Math.min(...this.sides);
    this.totalSideLength = this.sides.reduce((a, b) => a + b, 0);
    this.middlestSide = this.totalSideLength - this.bigliestSide - this.teensiestSide;
  }

  checkValidity() {
    if ((this.teensiestSide <= 0) ||
    (this.bigliestSide > this.middlestSide + this.teensiestSide)) {
      throw new Error();
    }
  }

  isEquilateral() {
    return this.bigliestSide === this.teensiestSide;
  }

  isIsosceles() {
    return this.bigliestSide === this.middlestSide ||
      this.middlestSide === this.teensiestSide;
  }

  isDegenerate() {
    return this.bigliestSide === this.middlestSide + this.teensiestSide;
  }

  isScalene() {
    return this.isIsosceles() === false;
  }

  kind() {
    this.checkValidity();
    if (this.isEquilateral()) return 'equilateral';
    if (this.isDegenerate()) return this.isScalene() ? 'degenerate scalene' : 'degenerate iscosceles';
    if (this.isIsosceles()) return 'isosceles';
    return 'scalene';
  }
}
