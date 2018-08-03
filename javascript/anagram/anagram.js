const Anagram = function (word = '') {
    this.base = word.toLowerCase();
    this.sortedBase = this.alphabetize(this.base);
}

Anagram.prototype.matches = function (input = []) {
    if (arguments.length > 1 || typeof input === 'string') {
        this.potentialMatches = Array.from(arguments);
    } else {
        this.potentialMatches = input;
    }
    return this.potentialMatches.reduce((anagramArray, potentialMatch) => {
        if (this.isAnagram(potentialMatch.toLowerCase())) {
            anagramArray.push(potentialMatch);
        }  
        return anagramArray;
    }, [])
}

Anagram.prototype.alphabetize = function (word = '') {
    return word.split('').sort().join('');
}

Anagram.prototype.isAnagram = function (testWord) {
    return (this.alphabetize(testWord) === this.sortedBase) && (testWord !== this.base);
};

module.exports = Anagram;
