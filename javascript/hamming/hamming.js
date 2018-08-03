const hamming = function () {};

hamming.prototype.compute = function (firstStrand, secondStrand) {
    if (firstStrand.length !== secondStrand.length) {
        throw new Error('DNA strands must be of equal length.');
    }

    return firstStrand.split('').reduce((hammingDistance, nucleotide, index) => {
        if (firstStrand[index] !== secondStrand[index]) {
            hammingDistance ++;
        }
        return hammingDistance;
    }, 0)
};

module.exports = hamming; 