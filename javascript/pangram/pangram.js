let Pangram = function (message) {
    this.message = message;
    this.lettersInMessage = message.replace(/[^a-zA-Z]/g,'').toLowerCase().split('');
};

Pangram.prototype.isPangram = function () {
    let remainingLetters = 'abcdefghijklmnopqrstuvwxyz';
    this.lettersInMessage.forEach(letter => {
        remainingLetters = remainingLetters.replace(letter, '');
    });
    return remainingLetters === '';
};

module.exports = Pangram;