const ReverseString = string =>
  string.split('').reduceRight((reversedString, character) =>
    reversedString + character, '');

module.exports = ReverseString;
