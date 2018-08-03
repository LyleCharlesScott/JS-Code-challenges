const PrimeFactors = function () {};

PrimeFactors.prototype.for = function (numberToFactor) {
    this.gettingFactored = numberToFactor;
    this.primeFactorList = [];

    this.nextFactorToCheck = 2;
    this.checkCurrentFactor();
    this.nextFactorToCheck += 1;
    while (this.gettingFactored !== 1) {
        this.checkCurrentFactor();
        this.nextFactorToCheck += 2;
    }
    return this.primeFactorList;
}

PrimeFactors.prototype.checkCurrentFactor = function () {
    while (this.gettingFactored % this.nextFactorToCheck === 0) {
        this.primeFactorList.push(this.nextFactorToCheck);
        this.gettingFactored /= this.nextFactorToCheck;  
    }
}

module.exports = new PrimeFactors();
