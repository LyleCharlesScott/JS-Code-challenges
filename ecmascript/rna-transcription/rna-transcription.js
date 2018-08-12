const rnaDictionary = { C: 'G', G: 'C', T: 'A', A: 'U' };

class RnaTranscription {
  toRna(sequence) {
    return [...sequence].reduce((accumulator, currentNecleotide) => {
      let transcription = accumulator;
      if (rnaDictionary[currentNecleotide] !== undefined) {
        transcription += rnaDictionary[currentNecleotide];
        return transcription;
      }
      throw new Error('Invalid input DNA.');
    }, '');
  }
}

export default RnaTranscription;
