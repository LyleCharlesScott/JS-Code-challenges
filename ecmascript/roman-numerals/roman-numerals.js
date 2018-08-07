class Symbol {
  constructor(symbol, value) {
    this.romanNumeral = symbol;
    this.arabicValue = value;
  }
}

const unformattedData = [
  ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100],
  ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9],
  ['V', 5], ['IV', 4], ['I', 1],
];

const symbolDictionary = Array.from(unformattedData, item => new Symbol(...item));

const getLargestSymbolThatFits = (arabicValue) => {
  let index = 0;
  while (symbolDictionary[index].arabicValue > arabicValue) {
    index += 1;
  }
  return symbolDictionary[index];
};

const toRoman = (arabicValue) => {
  let romanNumeral = '';
  const buildRomanNumberal = (value) => {
    const currentSymbol = getLargestSymbolThatFits(value);
    romanNumeral += currentSymbol.romanNumeral;
    const remainingValue = value - currentSymbol.arabicValue;
    return remainingValue === 0 ? romanNumeral : buildRomanNumberal(remainingValue);
  };
  return buildRomanNumberal(arabicValue);
};

module.exports = toRoman;
