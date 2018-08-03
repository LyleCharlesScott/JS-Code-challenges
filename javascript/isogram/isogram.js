const Isogram = function (words = '') {
    this.words = words
};

Isogram.prototype.isIsogram = function () {
    let processedwords = this.words.toLowerCase().replace(/[- ]/g, '');
    let i = 0;
    while (i < processedwords.length) {
        if (processedwords.indexOf(processedwords[i], i+1) !== -1) {
            return false;
        }
        i++;
    }
    return true;
}

module.exports = Isogram;