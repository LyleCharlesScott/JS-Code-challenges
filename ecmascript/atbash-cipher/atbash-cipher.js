const abc = Array.from('abcdefghijklmnopqrstuvwxyz');

const createAtbashKey = (alphabet) => {
  const key = new Map();
  const reversed = [...alphabet].reverse();
  for (const [index, letter] of alphabet.entries()) key.set(letter, reversed[index]);
  for (let i = 0; i <= 9; i += 1) key.set(i.toString(), i.toString());
  key.set(' ', ' ');
  return key;
};

const key = createAtbashKey(abc);

const encodeFormat = (text) => {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reformatted = [];
  for (let i = 0; i <= cleaned.length; i += 5) reformatted.push(cleaned.substring(i, i + 5));
  return reformatted.join(' ').trim();
};

const decodeFormat = text => text.replace(/[ ]/g, '');

const code = text => [...text].reduce((codedText, letter) => `${codedText}${key.get(letter)}`, '');

const atbashCipher = {
  encode: (text) => {
    const preparedText = encodeFormat(text);
    return code(preparedText);
  },
  decode: (text) => {
    const preparedText = decodeFormat(text);
    return code(preparedText);
  },
};

export default atbashCipher;
