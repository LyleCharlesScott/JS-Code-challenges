const uppercaseOffset = 65;
const lowercaseOffset = 97;

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
  if (key === '' || typeof key !== 'string' || !key.match(/^[a-z]/)) {
    throw new Error('Bad key');
  }
  return key;
};

const getOffset = (letter) => {
  if ((/^[a-z]*$/g).test(letter) === true) return lowercaseOffset;
  if ((/^[A-Z]*$/g).test(letter) === true) return uppercaseOffset;
  return 'not a letter';
};

const encodeLetter = (character, key) => {
  const offset = getOffset(character);
  if (offset === 'not a letter') return character;
  const keyCode = offset === lowercaseOffset ?
    key.charCodeAt() : key.toUpperCase().charCodeAt();
  let newCharCode = character.charCodeAt() + (keyCode - offset);
  if (newCharCode >= offset + 26) newCharCode -= 26;
  return String.fromCharCode(newCharCode);
};

class Cipher {
  constructor(key) {
    Object.defineProperty(this, 'key', {
      value: key !== undefined ? errorCheck(key) : generateKey(),
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
