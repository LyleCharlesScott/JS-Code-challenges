const errorCheck = (firstStrand, secondStrand) => {
  if (firstStrand.length !== secondStrand.length) throw new Error('DNA strands must be of equal length.');
};

export default class Hamming {
  compute(firstStrand, secondStrand) {
    errorCheck(firstStrand, secondStrand);
    return [...firstStrand].reduce((hammingDistance, nucleotide, index) => {
      if (firstStrand[index] !== secondStrand[index]) {
        return hammingDistance + 1;
      }
      return hammingDistance;
    }, 0);
  }
}
