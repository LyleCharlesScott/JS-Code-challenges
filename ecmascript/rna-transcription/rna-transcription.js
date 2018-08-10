const RNADictionary = { C: 'G', G: 'C', T: 'A', A: 'U' };

class rnaTranscription {
  toRna(sequence) {
    return [...sequence].reduce((accumulator, currentNecleotide) => {
      let transcription = accumulator;
      if (RNADictionary[currentNecleotide] !== undefined) {
        transcription += RNADictionary[currentNecleotide];
        return transcription;
      }
      throw new Error('Invalid input DNA.');
    }, '');
  }
}

export default rnaTranscription;
