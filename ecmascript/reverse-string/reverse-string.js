const ReverseString = string =>
  string.split('').reduceRight((reversedString, character) =>
    reversedString + character, '');

export default ReverseString;
