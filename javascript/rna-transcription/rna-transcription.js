let rnaTranscription = function () {
    this.RNADictionary = {'C': 'G', 'G': 'C', 'T': 'A', 'A': 'U'};
};

rnaTranscription.prototype.toRna = function (sequence) {
    let transcription = '';
    for (let codon of sequence) {
        if (this.RNADictionary[codon] !== undefined) {
            transcription += this.RNADictionary[codon];
        } else {
            throw new Error('Invalid input');
        }
    }
    return transcription;
}

module.exports = rnaTranscription;