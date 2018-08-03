let CollatzConjecture = function () {
    this.alreadyCalculated = {};
    this.currentIterationRecord = [];
};

CollatzConjecture.prototype.steps = function (value) {
    if (value < 1) {
        throw new Error('Only positive numbers are allowed');
    }
    return this.iterate(0, value); 
}

CollatzConjecture.prototype.iterate = function (steps, value) {
    this.currentIterationRecord.push(value);
    if (!!this.alreadyCalculated[value]) {
        return this.alreadyCalculated[value] + steps;
    }
    if (value === 1) {
        this.recordEverythingCalculated(steps);
        return steps;
    }
    return value % 2 === 0 ? 
        this.iterate(steps+1, value/2) : this.iterate(steps+1, value * 3 + 1); 
}

CollatzConjecture.prototype.recordEverythingCalculated = function (answer) {
    this.currentIterationRecord.forEach((value, index) => {
        this.alreadyCalculated[value] = answer - index;
    });
    this.currentIterationRecord = [];
}

module.exports = CollatzConjecture; 

// eliminate lines 14-17, 19, & 26-31 to take away the dynamic programming