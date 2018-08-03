let Triangle = function (side1, side2, side3) {
    this.allSides = Array.from(arguments, side => {
        if (!isNaN(side)) {
            return parseFloat(side, 10)
        } else {
            throw new Error();
        }
    });
    this.bigliestSide = Math.max(...this.allSides);
    this.teensiestSide = Math.min(...this.allSides);
    this.totalSideLength = this.allSides.reduce((a, b) => a + b, 0);
    this.middlestSide = this.totalSideLength - this.bigliestSide - this.teensiestSide;
};

Triangle.prototype.checkTriangleValidity = function () {
    if ((this.teensiestSide <= 0) || 
    (this.bigliestSide > this.middlestSide + this.teensiestSide)) {
        throw new Error();
    };
};

Triangle.prototype.isEquilateral = function () {
    return this.bigliestSide === this.teensiestSide;
};

Triangle.prototype.isIsosceles = function () {
    return this.bigliestSide === this.middlestSide || 
        this.middlestSide === this.teensiestSide;
};

Triangle.prototype.isDegenerate = function () {
    return this.bigliestSide === this.middlestSide + this.teensiestSide;
};

Triangle.prototype.isScalene = function () {
    return !this.isIsosceles();
};

Triangle.prototype.kind = function () {
    this.checkTriangleValidity();
    if (this.isEquilateral()) {
        return 'equilateral';
    } 
    if (this.isDegenerate()) {
        return this.isScalene() ? 'degenerate scalene' : 'degenerate isosceles';
    } 
    if (this.isIsosceles()) {
        return 'isosceles';
    } 
    return 'scalene';

};

module.exports = Triangle;