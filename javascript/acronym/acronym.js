const Acronyms = function () {};

Acronyms.prototype.parse = function (phrase) {
    this.wordList = phrase.match(/[A-Z]+[a-z]*|[a-z]+/g) || [];
    return this.wordList.reduce((acronym, word) => {
        return acronym += word[0].toUpperCase();
    }, '');
}

module.exports = new Acronyms();
