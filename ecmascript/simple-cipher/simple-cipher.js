const lowercaseOffset = 97;
const alphabetLength = 26;
const alphabetUpperEdge = lowercaseOffset + alphabetLength;

const generateKey = () => {
  let key = '';
  const keyLength = Math.floor((Math.random() * 100) + 100);
  for (let i = 0; i < keyLength; i += 1) {
    const randomLetter = Math.floor(Math.random() * 26);
    key += String.fromCharCode(randomLetter + lowercaseOffset);
  }
  return key;
};

const generateDecoderKey = key =>
  [...key].reduce((decoderKey, encodingLetter) => {
    const encodingLetterCode = encodingLetter.charCodeAt();
    const decodingLetter = encodingLetter === 'a' ?
      'a' : String.fromCharCode(220 - encodingLetterCode);
    return decoderKey + decodingLetter;
  }, '');

const errorCheck = (key) => {
  if (key === '' || typeof key !== 'string' || (/^[a-z]/).test(key) === false) {
    throw new Error('Bad key');
  }
  return key;
};

const getType = (character) => {
  if ((/^[a-z]*$/g).test(character) === true) return 'lowercase';
  if ((/^[A-Z]*$/g).test(character) === true) return 'uppercase';
  return 'not a letter';
};

const encodeLetter = (character, key) => {
  const type = getType(character);
  if (type === 'not a letter') return character;
  const keyCode = key.charCodeAt() - lowercaseOffset;
  let newCharCode = character.toLowerCase().charCodeAt() + keyCode;
  if (newCharCode >= alphabetUpperEdge) newCharCode -= alphabetLength;
  const encodedLetter = String.fromCharCode(newCharCode);
  return type === 'uppercase' ? encodedLetter.toUpperCase() : encodedLetter;
};

class Cipher {
  constructor(key = generateKey()) {
    Object.defineProperty(this, 'key', {
      value: errorCheck(key),
      writeable: false,
    });
    Object.defineProperty(this, 'decoderKey', {
      value: generateDecoderKey(this.key),
      writeable: false,
    });
  }

  processMessage(message, codingType) {
    const key = codingType === 'encode' ? this.key : this.decoderKey;
    return [...message].reduce((processedMessage, character, index) =>
      processedMessage + encodeLetter(character, key[index % key.length]), '');
  }

  encode(message) {
    return this.processMessage(message, 'encode');
  }

  decode(message) {
    return this.processMessage(message, 'decode');
  }
}

export default Cipher;
