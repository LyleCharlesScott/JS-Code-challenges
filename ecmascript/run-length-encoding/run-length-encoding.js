const isDigits = char => char.match(/^[0-9]/g);

const RLE = {
  encode: (string) => {
    const reset = 1;
    let counter = reset;
    return string.split('').reduce((accumulator, currentCharacter, index, characterList) => {
      let encodedOutput = accumulator;
      const nextCharacter = characterList[index + 1];
      if (nextCharacter !== currentCharacter) {
        encodedOutput += counter === 1 ? currentCharacter : `${counter}${currentCharacter}`;
        counter = reset;
      } else {
        counter += 1;
      }
      return encodedOutput;
    }, '');
  },
  decode: (string) => {
    const reset = '';
    let codingDigits = reset;
    return string.split('').reduce((accumulator, character) => {
      let decodedOutput = accumulator;
      if (isDigits(character)) {
        codingDigits += character;
      } else {
        const characterRepetitions = codingDigits !== '' ? parseInt(codingDigits, 10) : 1;
        for (let j = 0; j < characterRepetitions; j += 1) {
          decodedOutput += character;
        }
        codingDigits = reset;
      }
      return decodedOutput;
    }, '');
  },
};

module.exports = RLE;
