toRoman = function(inputValue) {
    let RomanNumeral = function (symbol, value) {
        this.symbol = symbol, this.value = value;
    };
    let unformattedNumerals = [
        ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100],
        ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], 
        ['V', 5], ['IV', 4], ['I', 1]  
    ];
    let NumeralDictionary = Array.from(unformattedNumerals, numeral => {
        return new RomanNumeral(...numeral);
    });
    
    let findLargestNumeralThatFits = (value) => {
        let index = 0;
        while (NumeralDictionary[index].value > value) {
            index ++;
        }
        return NumeralDictionary[index];
    };

    let calculateRomanNumeral = (arabicNumeral) => {
        let romanNumeral = '';
        let getNextNumeral = (value) => {
            let largestNumeralThatFits = findLargestNumeralThatFits(value);
            romanNumeral += largestNumeralThatFits.symbol;
            if (largestNumeralThatFits.value == value) {
                return romanNumeral;
            }
            return getNextNumeral(value - largestNumeralThatFits.value);
        }
        return getNextNumeral(arabicNumeral);
    }
    return calculateRomanNumeral(inputValue);
};

module.exports = toRoman;